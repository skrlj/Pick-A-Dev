import {getDevelopers} from '../libs/getDevelopers'
import ContentPageLayout from '../components/layouts/ContentPageLayout'
import { DeveloperCard } from '../components/developers';

function FrontEndPage({devs}) {
    return ( 
        <>
            {devs.map(dev => <DeveloperCard key={dev.uid}
                 fullName={dev.fullName}
                 avatar={dev.avatar}
                 jobTitle = {dev.jobTitle}
                 experience = {dev.experience}
                 availability = {dev.availability}
            />)}

        </>
     );
}

export default FrontEndPage;

//<ContentPageHeader type="Front End Developers" title="<Best Builds Around/>" tagline="find a dev that can bring any design to life"/>
FrontEndPage.getLayout = function getLayout(page) {
    return(
        <ContentPageLayout type="Front End Developers" title="<Best Builds Around/>" tagline="find a dev that can bring any design to life">
            {page}
        </ContentPageLayout>
    )
}

export async function getStaticProps(content) {
    const devs = await getDevelopers()
    const frontend = devs.filter(dev => dev.type === 'front end')
    return{
        props: {
            devs: frontend
        }
    }
}