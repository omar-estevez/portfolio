import '../../styles/ContentMain.scss';
import React, { lazy, Suspense } from 'react';

const AboutComponent = lazy(() => import('../About'));
const SkillsComponent = lazy(() => import('../Skills'));
const ProjectsComponent = lazy(() => import('../Projects'));
const ContactComponent = lazy(() => import('../Contact'));

const ContentMain = ({ isElementActive }) => {

    return (
        <div className='content'>

            <Suspense fallback={<div>Loading...</div>}>
                <AboutComponent mainClassName={`layer top-layer ${isElementActive[0] ? 'active-top' : ''}`} />
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
                <ContactComponent mainClassName={`layer bottom-layer ${isElementActive[1] ? 'active-bottom' : ''}`} />
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
                <SkillsComponent mainClassName={`layer left-layer ${isElementActive[2] ? 'active-left' : ''}`} />
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
                <ProjectsComponent mainClassName={`layer right-layer ${isElementActive[3] ? 'active-right' : ''}`} isElementActive={isElementActive[3]}/>
            </Suspense>
        </div>
    )
}

export default ContentMain;