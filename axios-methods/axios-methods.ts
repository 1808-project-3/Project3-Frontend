/* 

-Use this file to place your axios method signatures 
so the back end can fill them out.

-Be sure to include as much detail as you can describing 
exactly what you need so the backend can get it right.

*/


// Chase, James, Maja - Skill/Certifactions charts
/*
- SkillGroups/Skills
  - We need an array (skillGroups) of objects, with each object containing:
        - skill group name
        - total number of associates belonging to that skill group
        - an array of objects, with each object containing:
              - skill name
              - total number of associates with that skill
              
 =============================================================================================================================
 =============================================================================================================================
 import axios from 'axios';

let list = [{
    skillGroupName: "",
    totalSkillGroup: 0,
    skill: [{
        skillName: "",
        totalSkill: 0
    }],
}]

const res = axios.get('http://localhost:8080/users');
const res1 = axios.get('http://localhost:5002/skill');
const res2 = axios.get('http://localhost:5002/skill-group');

//loop through groups
res2.data.forEach((group, i) => {
    //grabbing group name
    list[i].skillGroupName = group.groupName;

    //iterating through users
    res.data.forEach((user) => {

        let hasGroup = false;

        //filter skills in group
        let skillsInGroup = res1.data.filter((id) => {
            id.groupId === group.groupId;
        })

        //iterating through skills in group
        skillsInGroup.forEach((skill, k) => {

            //adding skill name
            list[i].skill[k].skillName = skill.skillName;
            //filtering skills
            let count = user.userSkills.filter((skillId) => {
                skillId.skillId === skill.skillId;
            })
            //skill count
            list[i].totalSkill[k] += count.length;
            if (count.length > 0) {
                hasGroup = true;
            }
        })

        if (hasGroup === true) {
            //skillgroup count
            list[i].totalSkillGroup++;
        }
    })


})                          
 ========================================================================================================================================
 
- Certifications
  - We need an array (certifications) of objects, with each object containing:
      - certification name
      - array (users) of objects, with each object containing:
          - associate name
          - id
          - certification
          - project details
          - grade
          ^ this info is exactly what is being displayed in the resources list table

*/
