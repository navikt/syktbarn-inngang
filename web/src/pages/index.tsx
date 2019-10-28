import React from 'react';
import Page from '../components/page/Page';
import { injectIntl, Link } from 'gatsby-plugin-intl';
import FrontpagePoster from '../components/frontpage-poster/FrontpagePoster';
import { InjectedIntlProps } from 'react-intl';
import LinkPanel from '../components/link-panel/LinkPanel';
import FrontpagePanelWrapper from '../components/frontpage-panel-wrapper/FrontpagePanelWrapper';
import StrokeHeader from '../components/stroke-header/StrokeHeader';
import Box from '../components/box/Box';
import { RouterProps } from '@reach/router';

interface Props {}

const PosterIllustration = require('../assets/familie.svg');
const Veiviser = require('../assets/veiviser.svg');

const Hovedside: React.FunctionComponent<Props> = ({ intl, location }: Props & InjectedIntlProps & RouterProps) => {
    return (
        <Page
            header={
                <FrontpagePoster title={intl.formatMessage({ id: 'title' })} illustration={<PosterIllustration />}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas architecto, ipsum a laudantium
                    quibusdam ipsam delectus magnam voluptatem!
                </FrontpagePoster>
            }>
            <Box padHorizontal="l">
                <FrontpagePanelWrapper>
                    <LinkPanel title={'Sykt barn?'} url={`/pleiepenger-sykt-barn/`} image={<Veiviser />}>
                        Optio sequi facilis cum expedita nostrum unde iste laborum. Ea, illum
                    </LinkPanel>
                    <LinkPanel title={'Pleiepenger nærstående'} url={`/pleiepenger-sykt-barn/`} image={<Veiviser />}>
                        Harum asperiores ullam inventore reiciendis sit aperiam eum fugit qui aliquam?
                    </LinkPanel>
                    <LinkPanel title={'Inventore reiciendis'} url={`/pleiepenger-sykt-barn/`} image={<Veiviser />}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </LinkPanel>
                </FrontpagePanelWrapper>
                <Box margin="xl">
                    <StrokeHeader>Utfyllende informasjon</StrokeHeader>
                    <FrontpagePanelWrapper>
                        <LinkPanel title={'Sykt barn?'} url={`/pleiepenger-sykt-barn/`} layout="plain">
                            Optio sequi facilis cum expedita nostrum unde iste laborum. Ea, illum
                        </LinkPanel>
                        <LinkPanel title={'Sykt barn?'} url={`/pleiepenger-sykt-barn/`} layout="plain">
                            Optio sequi facilis cum expedita nostrum unde iste laborum. Ea, illum
                        </LinkPanel>
                        <LinkPanel title={'Sykt barn?'} url={`/pleiepenger-sykt-barn/`} layout="plain">
                            Optio sequi facilis cum expedita nostrum unde iste laborum. Ea, illum
                        </LinkPanel>
                    </FrontpagePanelWrapper>
                </Box>
                <Box margin="xl">
                    <StrokeHeader>Relatert informasjon</StrokeHeader>
                    <FrontpagePanelWrapper>
                        <Box textAlignCenter={true}>
                            <Link to="/pleiepenger-sykt-barn" className="lenke" rel="noopener noreferrer">
                                Pleiepenger
                            </Link>
                        </Box>
                        <Box textAlignCenter={true}>
                            <Link to="/pleiepenger-sykt-barn" className="lenke" rel="noopener noreferrer">
                                Pleiepenger
                            </Link>
                        </Box>
                    </FrontpagePanelWrapper>
                </Box>
            </Box>
        </Page>
    );
};

export default injectIntl(Hovedside);
