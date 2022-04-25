import Community from './components/Community'
import Developer from './components/Developer'
import Journey from './components/Journey'
import LearnMore from './components/LearnMore'
import MediaPartner from './components/MediaPartner'
import ValidatorNode from './components/NodeValidators'
import SyntheticWorld from './components/SyntheticWorld'
import Tokenomic from './components/Tokenomic'
import Top from './components/Top'
import WhatsNew from './components/WhatsNew/WhatsNew'
import WhyRei from './components/WhyRei'
import './styles.scss'

export const Home = () => {
    return (
        <div className="home-page _mgbt-24px _mgbt-48px-sm _ovfx-hd">
            <Top />
            <WhyRei />
            <ValidatorNode />
            <MediaPartner />
            <SyntheticWorld />
            <Developer />
            <Tokenomic />
            <Journey />
            <LearnMore />
            <Community />
            <WhatsNew />
            {/* <Subscribe /> */}
        </div>
    )
}

export default Home
