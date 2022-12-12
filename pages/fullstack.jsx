import {getDevelopers} from '../libs/getDevelopers'
import ContentPageLayout from '../components/layouts/ContentPageLayout'
import { DeveloperCard } from '../components/developers';

function FullStackPage({devs}) {
    return ( 
        <>
            {devs.map(dev => <DeveloperCard key={dev.uid}
                 fullName={dev.fullName}
                 avatar={dev.avatar}
                 jobTitle = {dev.jobTitle}
                 experience = {dev.experience}
                 availability = {dev.availability}
                 uid = {dev.uid}
            />)}

        </>
     );
}

export default FullStackPage;

//<ContentPageHeader type="Full Stack developers" title="Mr/Mrs DoItAll" tagline="specialized in versatility"/>

FullStackPage.getLayout = function getLayout(page) {
    return(
        <ContentPageLayout type="Full Stack developers" title="Mr/Mrs DoItAll" tagline="specialized in versatility">
            {page}
        </ContentPageLayout>
    )
}

export async function getStaticProps(content) {
    const devs = await getDevelopers()
    const fullstack = devs.filter(dev => dev.type === 'full stack')
    return{
        props: {
            devs: fullstack
        }
    }
}