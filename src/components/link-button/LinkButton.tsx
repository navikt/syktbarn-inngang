import React from 'react';
import Lenke, { Props as LenkeProps } from 'nav-frontend-lenker';
import './linkButton.less';
import '../../../node_modules/nav-frontend-knapper-style/src/index.less';

const LinkButton: React.FunctionComponent<LenkeProps> = (props) => (
    <Lenke {...props} className="knapp knapp--hoved linkButton" />
);

export default LinkButton;
