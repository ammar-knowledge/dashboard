import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdowns from './Dropdowns';

const skillsData = [
    {
        id: 1,
        name: 'Programming',
        subSkills: ['JavaScript', 'Python', 'Java'],
    },
    {
        id: 2,
        name: 'Design',
        subSkills: ['UI/UX Design', 'Graphic Design', 'Web Design'],
    },
];

const handleRemovSkillFields = jest.fn();
const hiddenSubSkill = jest.fn();
const setSkillsData = jest.fn();

test('renders dropdowns component', () => {
    render(
        <Dropdowns
            skills={{}}
            handleRemovSkillFields={handleRemovSkillFields}
            hiddenSubSkill={hiddenSubSkill}
            skillsData={skillsData}
            setSkillsData={setSkillsData}
        />
    );

    const skillsDropdown = screen.getByLabelText('Skills');
    expect(skillsDropdown).toBeInTheDocument();

    const subSkillsDropdown = screen.getByLabelText('Sub-skills');
    expect(subSkillsDropdown).toBeInTheDocument();
});

test('selects skill and sub-skill', () => {
    render(
        <Dropdowns
            skills={{}}
            handleRemovSkillFields={handleRemovSkillFields}
            hiddenSubSkill={hiddenSubSkill}
            skillsData={skillsData}
            setSkillsData={setSkillsData}
        />
    );

    const skillsDropdown = screen.getByLabelText('Skills');
    fireEvent.change(skillsDropdown, { target: { value: 'Programming' } });

    const subSkillsDropdown = screen.getByLabelText('Sub-skills');
    fireEvent.change(subSkillsDropdown, { target: { value: 'JavaScript' } });

    expect(skillsDropdown.value).toBe('Programming');
    expect(subSkillsDropdown.value).toBe('JavaScript');
});

test('deletes skill field', () => {
    render(
        <Dropdowns
            skills={{}}
            handleRemovSkillFields={handleRemovSkillFields}
            hiddenSubSkill={hiddenSubSkill}
            skillsData={skillsData}
            setSkillsData={setSkillsData}
        />
    );

    const deleteButton = screen.getByLabelText('delete');
    fireEvent.click(deleteButton);

    expect(handleRemovSkillFields).toHaveBeenCalledTimes(1);
});