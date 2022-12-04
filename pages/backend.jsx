import {getDevelopers} from '../libs/getDevelopers'
import ContentPageLayout from '../components/layouts/ContentPageLayout'
import { DeveloperCard } from '../components/developers';

function BackEndPage({devs}) {
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

export default BackEndPage;

//<ContentPageHeader type="Back End Developers" title="Unseen Heros" tagline="you name it, our devs can make it work"/>
BackEndPage.getLayout = function getLayout(page) {
    return(
        <ContentPageLayout type="Back End Developers" title="Unseen Heros" tagline="you name it, our devs can make it work">
            {page}
        </ContentPageLayout>
    )
}

export async function getStaticProps(content) {
    const devs = await getDevelopers()
    const backend = devs.filter(dev => dev.type === 'back end')
    return{
        props: {
            devs: backend
        }
    }
}