import React, {Component} from 'react';
// import "../jquery.css"

class UpperLeft extends Component {
	constructor(props) {
		super(props);
	}

  render(){
    // var core = this.props.requirements.categories.Core.courses;
    // var electives = this.props.requirements.categories.Electives.courses;
    // var cognates = this.props.requirements.categories.Cognates.courses;
    return (
    <div id="UL">
        <div className="main" id="accordion">
        <h3>Core</h3>
                    <div>
                        <span id="coreTab"></span>
                    </div>
                    <h3>Electives</h3>
                    <div>
                        <span id="electivesTab"></span>				
                    </div>
                    <h3>Cognates</h3>
                    <div>
                        <span id="cognatesTab"></span>
                    </div>
        </div>
    </div>
    );
	}

}
export default UpperLeft;