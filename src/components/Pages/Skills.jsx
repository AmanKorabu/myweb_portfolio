import React from 'react'
import { VscCode } from "react-icons/vsc";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { AiOutlineOpenAI } from "react-icons/ai";
import { DiDjango } from "react-icons/di";
import py from '../images/python.png';

function Skills() {
    return (
        <div>
            <div className="skills-head" style={{
                display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center',
            }}>
                <h1>Skills</h1>
                <i><VscCode size={50} color='rgb(179, 132, 82)' /></i><br />
            </div>
             <div className="skill-lists">
                <FaHtml5 size={80} color='#E34C26' className='html-logo' />
                <FaCss3Alt size={80} color='#264DE4'  className='css-logo'/>
                <FaJs size={80} color='#F7DF1E' className='js-logo'/>
                <FaReact size={80} color='cyan' className='reacts'/>
                <div>
                    <FaBootstrap size={80} color=' #7952B3' className='bootstraps' />
                </div>
                <AiOutlineOpenAI size={80} color='rgb(64, 60, 70)' className='openai-logo' />
                <img src={py} size={60} color='rgb(34, 95, 5)' className='python-logo' height={'82px'}  width={'82px'}/>
                <DiDjango size={80} color='rgb(98, 167, 66)' className='django-logo' />
                </div>
        </div>
    )
}

export default Skills
