import {getDevelopers} from '../libs/getDevelopers'
import ContentPageLayout from '../components/layouts/ContentPageLayout'
import { DeveloperCard } from '../components/developers';

function UiUxPage({ui}) {
    return ( 
        <>
            {ui.map(dev => <DeveloperCard key={dev.uid}
                 fullName={dev.fullName}
                 avatar={dev.avatar}
                 jobTitle = {dev.jobTitle}
                 experience = {dev.experience}
                 availability = {dev.availability}
            />)}
        </>
     );
}

export default UiUxPage;

UiUxPage.getLayout = function getLayout(page) {
    return(
        <ContentPageLayout type="UI-UX Developers" title="Humanizing Technology" tagline="intuitive, aesthetically-pleasing, interactive interfaces">
            {page}
        </ContentPageLayout>
    )
}

export async function getStaticProps(content) {
    
    const devs = await getDevelopers()
    const uiDevs = devs.filter(dev => dev.type === 'ui ux')
    return{
        props: {
            ui: uiDevs
        }
    }
}