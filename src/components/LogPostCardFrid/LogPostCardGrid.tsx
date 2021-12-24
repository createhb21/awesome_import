/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import media from '../../lib/styles/media';
import { ITheme } from '../../lib/styles/Theme';
import AwesomeRenderer from '../AwesomeRenderer';

export type LogPostCardGridProps = {
    post: {
        title: string;
        date: string;
        body: any;
        starCount: number;
        id: number;
    };
};

function LogPostCardGrid({ post }: LogPostCardGridProps) {
    const theme = useTheme();

    return (
        <li css={wrapperStyle(theme)}>
            <article>
                <section css={headerStyle(theme)}>
                    <h1>{post.title}</h1>
                </section>
                <section css={dateStyle}>{post.date}</section>
                <section css={contentStyle}>
                    <main>
                        <AwesomeRenderer>{post.body}</AwesomeRenderer>
                    </main>
                </section>
            </article>
        </li>
    );
}

export default LogPostCardGrid;

const wrapperStyle = (theme: ITheme) => css`
    ${media.small} {
        margin-right: 0;
        margin-left: 0.15rem;
    }

    align-items: center;
    line-height: 1.625;
    word-break: break-all;
    margin-right: 4.5em;
    border-bottom: 0.2px solid ${theme.grayBorder};

    & > article {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
`;

const headerStyle = (theme: ITheme) => css`
    display: flex;
    align-items: center;
    cursor: pointer;

    & > h1 {
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 2rem;
    }
`;

const dateStyle = (theme: ITheme) => css`
    margin-top: 0.24rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: ${theme.textGray};
`;

const contentStyle = (theme: ITheme) => css`
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;

    & > main {
        color: rgba(75, 85, 99, 0.97);

        & > p {
            line-height: 1.625;
            margin: 0;
            margin-bottom: 2rem;
        }
    }
`;
