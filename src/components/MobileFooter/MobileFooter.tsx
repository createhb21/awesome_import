/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import media from '../../lib/styles/media';
import { ITheme } from '../../lib/styles/Theme';
import ThemeSwitchBtn from '../ThemeSwitchBtn';
import MobileThemeSwitch from '../ThemeSwitchBtn/MobileThemeSwitch';
import MobileFooterItem from './MobileFooterItem';

export type MobileFooterProps = {};

function MobileFooter({}: MobileFooterProps) {
    const theme = useTheme();
    return (
        <>
            <footer css={[common, footerStyle(theme)]}>
                <MobileFooterItem icon="workspace" text="Write" to="/write" />
                <MobileFooterItem icon="flask" text="Log" to="/log" />
                <MobileThemeSwitch icon="globe" />
            </footer>
            <div css={[common]}></div>
        </>
    );
}

const common = css`
    display: none;
    ${media.small} {
        display: flex;
    }
    height: 4rem;
    width: 100%;
`;
const footerStyle = (theme: ITheme) => css`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 30;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.125);
    background: ${theme.buttonBg};
`;

export default MobileFooter;
