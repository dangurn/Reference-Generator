//Get React:
var React = require('react');

//Get the PreviewTextTools
var PreviewTextTools = require('../resources.js').previewTextTools;


//Paragraph 3A (Skills - intro)
var SkillsIntroduction = React.createClass ({
  render: function() {

    var referenceType = this.props.referenceType;
    var randomNos = this.props.randomNos;
    var workWords = this.props.workWords;
    var applicantName = this.props.applicantName;
    var applicantPronouns = this.props.applicantPronouns;
    var relationshipPlace = this.props.relationshipPlace;
    var skillsCount = this.props.skillsCount;

    //Get the old place name:
    function getOldWorkPlace(workplace) {
      if (workplace == "" ) {
        return "my institution"
      } else {
        return relationshipPlace;
      }
    }

    
    function writeSentence() {
      switch (randomNos.paragraph3.current) {
        case 1:
          return workWords[0] + " at " + getOldWorkPlace(relationshipPlace) + " has required " + applicantName[0] 
          + " to exercise a variety of skills" + getSkills(skillsCount) + ". "
        case 2:
          return applicantName[2] + " has been required to exercise a number of skills while " + workWords[1] 
          + " at " + getOldWorkPlace(relationshipPlace) + getSkills(skillsCount) + ". "
        case 3:
          return "As part of " + applicantPronouns[1] + " " + workWords[2] + " at " + getOldWorkPlace(relationshipPlace)
          + ", " + applicantName[0] + " has been required to exercise a range of skills"
          + getSkills(skillsCount) + ". "
      }
    }

    function getSkills(skillsCount) {
      if (skillsCount == 0) {
        return "";
      } else {
        switch (randomNos.paragraph3.current) {
          case 1:
            return " and I have noticed that " + applicantPronouns[4] + " exhibited a " 
            + skillsDescribe(skillsCount) + " of these during " + applicantPronouns[1] + " time here"
          case 2:
            return " and it appears as though " + applicantPronouns[4] + " exhibited a "
            + skillsDescribe(skillsCount) + " of these during " + applicantPronouns[1] + " time here"
          case 3:
            return " and it is clear through " + applicantPronouns[1] + " work here that "
            + applicantPronouns[4] + " managed to exercise a " + skillsDescribe(skillsCount)
            + " of these"  
        }
      }

      function skillsDescribe(skillsCount) {
        if (skillsCount < 3) {
          return "few"
        } else if (skillsCount < 5) {
          return "range"
        } else if (skillsCount < 9) {
          return "large range"
        }
      }
    }


    return (
      <span>
        {writeSentence()}
      </span>
    )
  }
})

//Paragraph 3B (Skills - communication)
var SkillsCommunication = React.createClass ({
  render: function() {

    var applicantName = this.props.applicantName;
    var applicantPronouns = this.props.applicantPronouns;
    var skillsCommunication = this.props.skillsCommunication;
    var randomNo = this.props.randomNos.paragraph3.current;

    //Write opening:
    function writeOpening() {
      switch (randomNo) {
        case 1:
          return " In terms of communication skills, it is clear that " + applicantName[0]
        case 2:
          return " Regarding " + applicantPronouns[1] + " communication skills, it is clear that "
          + applicantName[0]
        case 3:
          return " With regard to communication skills, I have noticed that " + applicantName[0]
      }
    }



    //Write communication skills sentence:
    //0 = engages with others, 1 = works independently, 2 = works well in groups.
    function writeSkillsCommunication1(skills) {
      if (skills[0].selected == true) {
        if (skills[1].selected == true || skills[2].selected == true) {
          return " engages well with others and";
        } else {
          return " engages well with others"
        }
      } else {
        return "";
      }
    }

    function writeSkillsCommunication2(skills) {
      if (skills[1].selected == true && skills[2].selected == true) {
        return " is capable of working independently as well as in groups";
      } else if (skills[1].selected == true && skills[2].selected == false) {
        return " is strongest when working independently";
      } else if (skills[1].selected == false && skills[2].selected == true) {
        return " is strongest when working in a group";
      } else {
        return "";
      }
    }

    function writeSentence(skillsCommunication) {
      if (
      skillsCommunication[0].selected == true || 
      skillsCommunication[1].selected == true || 
      skillsCommunication[2].selected == true) {
        return writeOpening()
        + writeSkillsCommunication1(skillsCommunication) 
        + writeSkillsCommunication2(skillsCommunication)
        + ".";
      } else {
        return "";
      }
    }
    
    return (
      <span>
        {writeSentence(skillsCommunication)}
      </span>
    )
  }
})

//Paragraph 3C (Skills - attitude)
var SkillsAttitude = React.createClass ({
  render: function() {

    var workWords = this.props.workWords;
    var applicantName = this.props.applicantName;
    var applicantPronouns = this.props.applicantPronouns;
    var skillsAttitude = this.props.skillsAttitude;
    var skillsCommunication = this.props.skillsCommunication;

    //Get the word 'also' if needed!
    function getAlsoWord(commSkills) {

      var noCommSkills = 0;

      for (var i = 0; i < commSkills.length; i++) {
        if (commSkills[i].selected == true) {
          noCommSkills ++
        }
      }

      if (noCommSkills !== 0) {
        return " also";
      } else {
        return "";
      }
    }

    //Write Attitudes sentence:
    //0 = enthusiastic about work, 1 = shows initiative, 2 = positive attitude.
    function writeSentence(skillsAttitude) {

      var skillsAttitudeArray = [];

      if (skillsAttitude[0].selected == true) {
        skillsAttitudeArray.push("shown great enthusiasm in " + applicantPronouns[1] + " work")
      }

      if (skillsAttitude[1].selected == true) {
        skillsAttitudeArray.push("demonstrated that " + applicantPronouns[0] 
        + " can use initiative to tackle problems")
      }

      if (skillsAttitude[2].selected == true) {
        skillsAttitudeArray.push("addressed " + applicantPronouns[1] + " work with a positive attitude")
      }

      switch (skillsAttitudeArray.length) {
        case 0:
          return "";
        default:
          var attitudeSentence = " Throughout " + applicantPronouns[1] + " " + workWords[2] + ", " 
          + applicantPronouns[4] + getAlsoWord(skillsCommunication) + " ";

            for (var i = 0; i < skillsAttitudeArray.length; i++) {
              if (i + 1 == skillsAttitudeArray.length) {
                attitudeSentence += skillsAttitudeArray[i]
              } else if (i + 1 == skillsAttitudeArray.length - 1) {
                attitudeSentence += skillsAttitudeArray[i] + " and "
              } else {
                attitudeSentence += skillsAttitudeArray[i] + ", "
              }
            }
            
            return attitudeSentence + "." 
      }
    }    

    return (
      <span>
        {writeSentence(skillsAttitude)}
      </span>
    )
  }
})

//Paragraph 3D (Skills - other)
var SkillsOther = React.createClass ({
  render: function() {

    var applicantName = this.props.applicantName;
    var applicantPronouns = this.props.applicantPronouns;
    var skillsOther = this.props.skillsOther;
    
    //Write Other Skills sentence:
    //0 = time management, 1 = presentation, 2 = literacy.
    //Let's put the sentences in an array first:
    function writeSentence(skillsOther) {

      var skillsOtherArray = [];

      if (skillsOther[0].selected == true) {
        skillsOtherArray.push(applicantPronouns[3] + " good at managing " + applicantPronouns[1] + " time")
      }

      if (skillsOther[1].selected == true) {
        skillsOtherArray.push(applicantPronouns[3] + " able to give clear presentations to others")
      }

      if (skillsOther[2].selected == true) {
        skillsOtherArray.push("that " + applicantPronouns[1] + " literacy skills are excellent")
      }

      switch (skillsOtherArray.length) {
        case 0:
          return "";
        default:
          var otherSkillsSentence = " " + applicantName[2] + " has shown that ";

            for (var i = 0; i < skillsOtherArray.length; i++) {
              if (i + 1 == skillsOtherArray.length) {
                otherSkillsSentence += skillsOtherArray[i]
              } else if (i + 1 == skillsOtherArray.length - 1) {
                otherSkillsSentence += skillsOtherArray[i] + " and "
              } else {
                otherSkillsSentence += skillsOtherArray[i] + ", "
              }
            }

            return otherSkillsSentence + "." 
      }
    }    

    return (
      <span>
        {writeSentence(skillsOther)}
      </span>
    )
  }
})

//Paragraph 3E (Skills - competencies)
var SkillsCompetencies = React.createClass({
  render: function() {

    var applicantName = this.props.applicantName;
    var competencies = this.props.competencies;
    var skillsCount = this.props.skillsCount;
    var randomNo = this.props.randomNos.paragraph3.current;

    //Get the 'in addition' phrase if needed:
    function inAddition(skilldCount) {
      if (skillsCount !== 0) {
        switch (randomNo) {
          case 1:
            return " In addition, "
          case 2:
            return " Additionally, "
          case 3: 
            return " Alongside these skills, "
        }
      } else {
        return "";
      }
    }

    //Get prefix:
    function getPrefix(name) {
      switch (name.charAt(0)) {
        case "a":
        case "e":
        case "i":
        case "0":
        case "u":
          return "an ";
        default:
          return "a ";
      }
    }

    //Get the main sentence
    function writeSentence(competencies) {

      var competenciesSelected = [];

      for (var i = 0; i < competencies.length; i++) {
        if (competencies[i].selected == true)
          competenciesSelected.push(competencies[i].name)
      }

      switch (competenciesSelected.length) {
        case 0:
          return "";
        default:
          var competenciesSentence = inAddition(skillsCount) + "I believe " + applicantName[0] 
            + " to be " + getPrefix(competenciesSelected[0]);

            for (var i = 0; i < competenciesSelected.length; i++) {
              if (i + 1 == competenciesSelected.length) {
                competenciesSentence += competenciesSelected[i]
              } else if (i + 1 == competenciesSelected.length - 1) {
                competenciesSentence += competenciesSelected[i] + " and "
              } else {
                competenciesSentence += competenciesSelected[i] + ", "
              }
            }
            
            return competenciesSentence + " individual."

      };
    }   

    return (
      <span>
        {writeSentence(competencies)}
      </span>
    )
  }
})

//Paragraph 3 Compiler
//In this component, we take a load of information from state then
//put it in a format such that it can be rendered by the Paragraph 3 components:

var Paragraph3Compiler = React.createClass ({
  render: function() {

    var referenceType = this.props.referenceType;
    var skillsCount = this.props.skillsCount;

    //Get some work words:
    if (referenceType.selected == "academic") {
      var workWords = ["Studying", "studying", "studies"]
    } else {
      var workWords = ["Working", "working", "work"]
    }
    
    return (

      <div className="preview-block">
        <div className="preview-text copy-body email-body" id="paragraph3">
          <SkillsIntroduction
            referenceType={this.props.referenceType}
            randomNos={this.props.randomNos}
            workWords={workWords}
            applicantName={this.props.applicantName}
            applicantPronouns={this.props.applicantPronouns}
            relationshipPlace={this.props.relationshipPlace}
            referee={this.props.referee}
            skillsCount={skillsCount}
          />
          <SkillsCommunication
            randomNos={this.props.randomNos}
            applicantName={this.props.applicantName}
            applicantPronouns={this.props.applicantPronouns}
            skillsCommunication={this.props.skillsCommunication}
          />
          <SkillsAttitude 
            randomNos={this.props.randomNos}
            workWords={workWords}
            applicantName={this.props.applicantName}
            applicantPronouns={this.props.applicantPronouns}
            skillsCommunication={this.props.skillsCommunication}
            skillsAttitude={this.props.skillsAttitude}
          />
          <SkillsOther
            randomNos={this.props.randomNos}
            applicantName={this.props.applicantName}
            applicantPronouns={this.props.applicantPronouns}
            skillsOther={this.props.skillsOther}
          />
          <SkillsCompetencies
            randomNos={this.props.randomNos}
            applicantName={this.props.applicantName}
            competencies={this.props.competencies}
            skillsCount={this.props.skillsCount}
          />
        </div>
        <PreviewTextTools
          name="paragraph3"
          randomised="true"
          editable="true"
          randomNos={this.props.randomNos}
          changeValue={this.props.changeValue}
        />
      </div>
    )
  }

})

module.exports = Paragraph3Compiler;


//Utiliies

//Copy array function:

function copy(thing){

  if(typeof thing !== "object" || thing === null){
    return thing;
  }

  if(Array.isArray(thing)) {
    var out = [];
    for(var i = 0; i < thing.length; i++){
      out.push( copy(thing[i]) );
    }
    return out;
  }

  var out = {};
  for(var key in thing){
    out[key] = copy(thing[key]);
  }
  return out;

}
