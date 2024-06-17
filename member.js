function skillsMember() {
    let skills = {
        html: 5,
        css: 4,
        js: 5,
        react: 4,
        node: 3
    };

    function getSkills() {
        return skills;
    }

    function setSkills(skillName, skillValue) {
        skills[skillName] = skillValue;
    }

    return {
        getSkills,
        setSkills
    };
}