import {Skill} from "./index";
import { useState, useEffect } from "react";
import {devSkills} from "../../constants/skills";

const Skills = () => {
    const [javascript, setJavaScript] = useState(0);
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [reactJs, setReactJs] = useState(0);
    const [git, setGit] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setJavaScript((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 70);
            });
            setHtml((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 85);
            });
            setCss((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 75);
            });
            setReactJs((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 85);
            });
            setGit((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 60);
            });
        }, 200);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const { htmlSkill, cssSkill, jsSkill, reactSkill, gitSkill } = devSkills;
    return (
        <>
            <Skill
                name={htmlSkill.name}
                icon={htmlSkill.icon}
                color={htmlSkill.color}
                value={html}
            />
            <Skill
                name={cssSkill.name}
                icon={cssSkill.icon}
                color={cssSkill.color}
                value={css}
            />
            <Skill
                name={jsSkill.name}
                icon={jsSkill.icon}
                color={jsSkill.color}
                value={javascript}
            />
            <Skill
                name={reactSkill.name}
                icon={reactSkill.icon}
                color={reactSkill.color}
                value={reactJs}
            />
            <Skill
                name={gitSkill.name}
                icon={gitSkill.icon}
                color={gitSkill.color}
                value={git}
            />
        </>
    )
}

export default Skills;