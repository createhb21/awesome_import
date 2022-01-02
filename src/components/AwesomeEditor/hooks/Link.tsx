/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { CompositeDecorator, DraftDecoratorComponentProps } from 'draft-js';
import randomColor from 'randomcolor';
import { css } from '@emotion/react';
import palette from '../../../lib/palette';

const getColorStyle = (linkColor: string, location: string) => css`
    color: ${linkColor};
    border-bottom: ${location !== '/guestbook' && '2px solid rgba(143,254,191,0.87)'};
`;

export const Link = (props: DraftDecoratorComponentProps) => {
    const randomLinkColor = randomColor();
    const location = window.location.pathname;
    const blueGrayColor = palette.blueGrey[300];
    const [linkColor, setLinkColor] = useState('');
    const { url } = props.contentState.getEntity(props.entityKey).getData();

    useEffect(() => {
        if (location !== '/guestbook') {
            setLinkColor(blueGrayColor);
        } else {
            setLinkColor(randomLinkColor);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
    return (
        <a rel="noopener noreferrer" target="_blank" href={url} css={getColorStyle(linkColor, location)}>
            {props.children}
        </a>
    );
};

export const linkDecorator = new CompositeDecorator([
    {
        strategy: (contentBlock, callback, contentState) => {
            contentBlock.findEntityRanges(character => {
                const entityKey = character.getEntity();
                return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
            }, callback);
        },
        component: Link,
    },
]);
