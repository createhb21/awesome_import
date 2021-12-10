/** @jsxImportSource @emotion/react */
import { Helmet } from 'react-helmet-async';
import { css, useTheme } from '@emotion/react';
import { ITheme } from '../../lib/styles/Theme';
import { data, IWriteData } from '../../hooks/useWriteTextData';
import WritePostCardGrid from '../../components/WritePostCardGrid';

export type WriteProps = {};

function Write({}: WriteProps) {
    const { posts } = data;
    const theme = useTheme();
    return (
        <>
            <Helmet>
                <title>@_Import/write</title>
            </Helmet>
            <div css={wrapperStyle(theme)}>
                <header>
                    <h1>Write</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat consequatur tempore culpa, consectetur dolores nam praesentium veritatis in quam nesciunt! Reiciendis </p>
                </header>
                <ul css={postListStyle(theme)}>
                    {posts &&
                        posts.map((item: IWriteData) => {
                            return <WritePostCardGrid post={item} />;
                        })}
                </ul>
            </div>
        </>
    );
}

export default Write;

const postListStyle = (theme: ITheme) => css`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const wrapperStyle = (theme: ITheme) => css`
    width: 100%;
    margin-top: 1.525rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: block;

    & > img {
        width: 30%;
    }

    & > header {
        padding-top: 3.5rem;
        padding-bottom: 3.5rem;

        & > h1 {
            font-weight: 700;
            font-size: 2.25rem;
            line-height: 2.5rem;
            margin-bottom: 1rem;
        }

        & > p {
            display: block;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            color: ${theme.textGray};
            font-size: 1rem;
            line-height: 1.5rem;
        }
    }
`;
