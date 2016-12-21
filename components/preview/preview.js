//PreviewBox

//There are two parts to the Preview Box component:
//The <PreviewPage /> renders all of the data as text
//The <PreviewToolbar /> houses some tools (copy, email buttons. etc)

//Get React:
var React = require('react');


//Now we'll get some resources:

//Get Buttons for the Preview Toolbar:
var EditButton = require('./resources.js').editButton;
var EmailButton = require('./resources.js').emailButton;
var CopyButton = require('./resources.js').copyButton;

//Get each part of the reference for the Preview Page:
var DateStamp = require('./header/header.js').dateStamp;
var Greeting = require('./header/header.js').greeting;
var SubjectHeading = require('./header/header.js').subjectheading;

var Paragraph1 = require('./paragraph1/paragraph1.js');
var Paragraph2 = require('./paragraph2/paragraph2.js');
var Paragraph3 = require('./paragraph3/paragraph3.js');
var Paragraph4 = require('./paragraph4/paragraph4.js');

var Signature = require('./footer/footer.js');


//Now let's compile everything in the Preview Container:

//The Preview Page:
var PreviewPage = React.createClass ({
  render: function() {

    return (

      <div className="preview-page">

        <DateStamp 
          currentTime={this.props.currentTime}
        />
        <Greeting 
          addressee={this.props.addressee}
        />
        <SubjectHeading
          applicant={this.props.applicant}
        />
        <Paragraph1 
          applicantPronouns={this.props.applicantPronouns}
          applicantName={this.props.applicantName}
          referee={this.props.referee}
          relationshipLength={this.props.relationshipLength}
          relationshipCapacity={this.props.relationshipCapacity}
          relationshipPosition={this.props.relationshipPosition}
          newInfo={this.props.newInfo}
          currentTime={this.props.currentTime}
          datePeriod={this.props.datePeriod}
        />
        <Paragraph2
          work={this.props.work}
          applicantPronouns={this.props.applicantPronouns}
          applicantName={this.props.applicantName}
          referee={this.props.referee}
        />
        <Paragraph3
          skillsCommunication={this.props.skillsCommunication}
          skillsAttitude={this.props.skillsAttitude}
          skillsOther={this.props.skillsOther}
          competencies={this.props.competencies}
          applicantName={this.props.applicantName}
          applicantPronouns={this.props.applicantPronouns}
          referee={this.props.referee}
        />
        <Paragraph4
          applicantName={this.props.applicantName}
          applicantPronouns={this.props.applicantPronouns}
          newInfo={this.props.newInfo}
          skillsCommunication={this.props.skillsCommunication}
          skillsAttitude={this.props.skillsAttitude}
          skillsOther={this.props.skillsOther}
          work={this.props.work}
        />
        <Signature
          referee={this.props.referee}
        />
      </div>
    )
  }
});

//The Preview Toolbar:
var PreviewToolbar = React.createClass ({
  render: function() {
    return (
      <div className="pane-toolbar">
        <EditButton />
        <CopyButton />
        <EmailButton />
      </div>
    )
  }
})

//The Preview Box:
var PreviewBox = React.createClass ({
  render: function() {
    return (
      <div id="preview-container" className="pane-container">
        <PreviewPage 
          currentTime={this.props.currentTime}
          applicant={this.props.applicant}
          applicantName={this.props.applicantName}
          applicantPronouns={this.props.applicantPronouns}
          datePeriod={this.props.datePeriod}
          referee={this.props.referee}
          relationshipLength={this.props.relationshipLength}
          relationshipCapacity={this.props.relationshipCapacity}
          relationshipPosition={this.props.relationshipPosition}
          work={this.props.work}
          skillsCommunication={this.props.skillsCommunication}
          skillsAttitude={this.props.skillsAttitude}
          skillsOther={this.props.skillsOther} 
          competencies={this.props.competencies}
          newInfo={this.props.newInfo}
          addressee={this.props.addressee}
        />
        <PreviewToolbar />
      </div>
    )
  }
})


module.exports = PreviewBox;