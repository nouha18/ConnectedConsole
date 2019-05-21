import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardHeader,CardText} from 'material-ui/Card';
import Terminal from 'terminal-in-react';
import {browserHistory} from 'react-router';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Notifier from "react-desktop-notification";
import axios from 'axios';
const styles ={
  customWidth: {
    width: 130,
    paddingLeft:10,
  },
};
export default class Console extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false , text:'',
      date: new Date(),
      openedunity:false,
      file:'',
      script:'',
      email:localStorage.getItem('email'),
      code:'',
      valuegrp:1,
      list:[],
      locked:false,
      loc:false,
      count:localStorage.getItem('duration_min'),
      count_hour:localStorage.getItem('duration_hour'),
      count_day:localStorage.getItem('duration_day'),
      nomGroupe:'',
      groupeIndex:0,
      show:false,
      imgName:'../images/elr.jpg',
    };
    this.onCountTime=this.onCountTime.bind(this);
    this.handleGetAllGroup=this.handleGetAllGroup.bind(this);
    this.runCode= this.runCode.bind(this);
    this.handleSelectGroup= this.handleSelectGroup.bind(this);
  }

  handleGetAllGroup() {
    console.log(this.state.email);
    axios.get(`http://localhost:27018/login/allgroup?email=` + localStorage.getItem('email'))
      .then(res => {
        this.setState({lists: res.data});
        console.log(res.data);
        this.setState({nomGroupe: res.data[this.state.groupeIndex]});
        localStorage.setItem('Nomgroupe', this.state.lists[this.state.groupeIndex].Nom);
      });
  }
 /* handleParticipation(){
    this.setState({lists:localStorage.getItem('listinvolved')});
    for(let i=0;i <this.state.lists.length;i++) {
      console.log(this.state.lists);
      for( let p in this.state.lists){
        localStorage.getItem('listinvolved');
        if(localStorage.getItem('email')===p.email){
          this.setState({loc:!this.state.loc});
        }
      }
      if(localStorage.getItem('involved')==true &&this.state.loc==true ){
        this.setState({show:!this.state.show});
      }

    }
  }
*/
  runCode(){
    {this.state.script}
    {localStorage.getItem('script')}
    alert("code written");
   }
  handleLocked(){
   console.log("locked component");

  }

componentWillMount(){
    this.handleGetAllGroup();

}
  onCountTime()
  {
    setInterval(() => {
      this.setState({
        count: this.state.count-1
      });
    }, 1000);
    if(this.state.count==0){
      this.setState({count:localStorage.getItem('duration_hour')});
    }
  }
componentDidMount(){
    if(localStorage.getItem("role")=="student") {
      this.setState({openedunity:this.state.openedunity});
      let oneday = 1000 * 60 * 60 * 24;
      let oneHour = 1000 * 60 * 60;
      let oneMinute = 1000 * 60;
      let nbrday = localStorage.getItem('dateexp') / oneday;
      let nbrHour = localStorage.getItem('dateexp') / oneHour;
      let nbrMin = localStorage.getItem('dateexp') / oneMinute;
      var now_mins = this.state.date.getTime() / oneMinute;
      var now_hours = this.state.date.getTime() / oneHour;
      var now_day = this.state.date.getTime() / oneday;
      if (now_mins == nbrMin || localStorage.getItem('duration_min') == 0) {
        Notifier.start("Timer by " + localStorage.getItem('username'), "CLock Tick! harry up", "www.google.com", "http://localhost:3003/view/" + localStorage.getItem('avatar'));
        window.close();
      }
      if (now_hours == nbrHour || localStorage.getItem('duration_hour') == 0) {
        Notifier.start("Timer by " + localStorage.getItem('username'), "CLock Tick! still fiew days", "www.google.com", "http://localhost:3003/view/" + localStorage.getItem('avatar'));
      }
      if (now_day == nbrday || localStorage.getItem('duration_day') == 0) {
        Notifier.start(" Timer tick " + localStorage.getItem('username'), "no more time to code", "www.google.com", "http://localhost:3003/view/" + localStorage.getItem('avatar'));
      }
    }
    if(localStorage.getItem('role')=="professor") {
      this.setState({openedunity:!this.state.openedunity});
     let oneday = 1000 * 60 * 60 * 24;
      let oneHour = 1000 * 60 * 60;
      let oneMinute = 1000 * 60;
      let nbrday = localStorage.getItem('dateexp') / oneday;
      let nbrHour = localStorage.getItem('dateexp') / oneHour;
      let nbrMin = localStorage.getItem('dateexp') / oneMinute;
      if (now_mins == nbrMin || localStorage.getItem('duration_min') == 0) {
        Notifier.start("Timer by " + localStorage.getItem('username'), "CLock Tick! harry up", "www.google.com", "http://localhost:3003/view/" + localStorage.getItem('avatar'));
       }
      if (now_hours == nbrHour || localStorage.getItem('duration_hour') == 0) {
        Notifier.start("Timer by " + localStorage.getItem('username'), "CLock Tick! still fiew days", "www.google.com", "http://localhost:3003/view/" + localStorage.getItem('avatar'));
      }
      if (now_day == nbrday || localStorage.getItem('duration_day') == 0) {
        Notifier.start(" Timer tick " + localStorage.getItem('username'), "no more time to code", "www.google.com", "http://localhost:3003/view/" + localStorage.getItem('avatar'));

      }

    }


  //month +1
  var month=parseInt(this.state.date.getMonth())+1;
    console.log("year :"+this.state.date.getFullYear());
    console.log("Month :"+month.toString());
    console.log("days :"+this.state.date.getDate());
    console.log("hours :"+this.state.date.getHours());
  console.log("minutes :"+this.state.date.getMinutes());
}
  //https://developer.mozilla.org/fr/docs/Web/API/Console/dir
  handleExpandChange(expanded){
    this.setState({expanded: expanded});
  }
  onLoad(document) {
    console.log(document) ;// output <p>hello world</p>
  }

  handleExpand () {
    this.setState({expanded: true});
  }
  handleBrowser(){
    browserHistory.push("/login");
  }
  handleModelChange(text) {
    this.setState({
      text: text
    });
  }
  handleReduce () {
    this.setState({expanded: !this.state.expanded});
  }
  handleFile(e) {
    console.log('handlefile');
    const file = e.target.files[0];
    this.setState({file: file});
    let fileReader= new FileReader();
    fileReader.readAsText(file, "UTF-8");
    fileReader.onload = function(fileLoadedEvent){
      let textFromFileLoaded = fileLoadedEvent.target.result;
<<<<<<< HEAD
      console.log('text from filereader',eval(textFromFileLoaded));
=======
      console.log('text from filerader',eval(textFromFileLoaded));
>>>>>>> bac3924dc9dd6a45f5e8a8571612d5e7fd25bdf3
      localStorage.setItem('script',eval(textFromFileLoaded));
      localStorage.getItem('script');
      this.setState({script:textFromFileLoaded});
      console.log('+++++ filerader',fileReader);
    };
    this.setState({imgName: '../../images/'+file.name});
    console.log(file.fullPath);
    this.setState({file: file.name});
    alert(file.name);
    localStorage.setItem('filename',this.state.imgName);

  }
  handleSelectGroup(event, index, value) {
    this.setState({valuegrp: value});
    this.setState({groupeIndex: index});
    console.log("value" + this.state.valuegrp);
    console.log("index" + this.state.groupeIndex);
    console.log("Nom du groupe selectioné " + this.state.lists[this.state.groupeIndex].Nom);
  }
  render() {
    const liste = this.state.lists;

    if(localStorage.getItem('_id')!=null) {
      return (
        <div>
          <div>
            <Paper zDepth={4} style={{ height:'100%'}}>
              <Card expanded={this.state.expanded}
               onExpandChange={this.handleExpandChange}>
                <CardHeader
                  title="Connected Console For Classes"
                  subtitle={"Date to get closed before :"+(localStorage.getItem('duration_day')!=null||localStorage.getItem('duration_hour')!=null?localStorage.getItem('duration_day')+"days:"+localStorage.getItem('duration_hour')+"hours:"+this.state.count+"min Good Luck":this.state.date)}
                  actAsExpander={true}
<<<<<<< HEAD
                  showExpandableButton={true}/>
                { this.state.openedunity &&<div style={{float:'right', marginRight:20}}>
=======
                  style={{backgroundColor:"#B39DDB"}}
                  showExpandableButton={true}/>
              <div style={{backgroundColor:"#E1BEE7",width:'40%', float:'left'}}>
                { this.state.openedunity &&
                <div style={{ marginRight:5}}>
>>>>>>> bac3924dc9dd6a45f5e8a8571612d5e7fd25bdf3
               <CardText>Choose a Groupe For this Tutoriel</CardText><br/>
                <SelectField
                  floatingLabelText="Select a Groupe"
                  onChange={this.handleSelectGroup.bind(this)}
                  value={this.state.valuegrp}
                  style={styles.customWidth}>
                  {liste.map((item, index) =>
                    <MenuItem value={index} onClick={this.handleSelectGroup} primaryText={item.Nom}/>
<<<<<<< HEAD
                  )}
                </SelectField>
                </div>}
                <CardText>  <h3>Fonctionality : </h3>
=======
                    )}
                </SelectField>
                </div>}
                <CardText>  <h4>Sessions : </h4>
                  <p>Create script/snippets</p>
                  <p>Test and create commands</p>
>>>>>>> bac3924dc9dd6a45f5e8a8571612d5e7fd25bdf3
                  <h3>Options : </h3>
                  <p style={{paddingLeft:10}}> Info : you can use devtools with Google Chrome and FireFox </p>
                  <p style={{paddingLeft:2}}>Upload file script than work with it </p>
                  <input type="file" name="fileupload" title="file" onChange={this.handleFile.bind(this)} />
                </CardText>
<<<<<<< HEAD

                <br/>
                <h3>test script</h3>
=======
              </div>
                <br/>
>>>>>>> bac3924dc9dd6a45f5e8a8571612d5e7fd25bdf3
                {this.state.script}
                <br/>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "90vh"
                  }}>
                  <Terminal
                    shortcuts={{
                      'darwin,win,linux': {
                        'ctrl + maj + I': 'echo whoo',
                      },
                    }}
                    color='white'
                    backgroundColor='black'
                    barColor='black'
                    style={{fontWeight: "bold", fontSize: "1em"}}
                    commands={{
                      'open-google': () => window.open('https://www.google.com/', '_blank'),
                      showmsg: "Taper Google cmd",
                      'jsbin': () => window.open('https://jsbin.com/?html,css,js,output', '_blank'),
                      'npm-init': () => window.open('https://www.google.com', 'npm init'),
                      'courses': () => window.open('http://localhost:3000/Courses', '_blank'),
                      'welcome': () => window.open('http://localhost:3000/start', '_blank'),
                      'clear': () => window.clean(),

                      'print': () => window.print(console.log('alerteeeeeeeeeeeeeee')),
                      'write': () =>{eval(this.state.script)},
                      'file':  this.handleFile.bind(this),
                      'facebook': () => window.open('http://www.facebook.com', '_blank'),
                      'hello': {
                        method: (args, print) => {
                          print(`hello ${args._[0] || `${localStorage.getItem('username')}`}`);
                          if(args._[0]=='bash') {
                            print(` You 're Welcome ${localStorage.getItem('username')}`);
                          }
                        },
                        options: [
                          {
                            name: 'hello',
                            description: 'start word',
                            defaultValue: 'hi !',
                          },]
                      },
                      'echo': {
                        method: (args, print) => {
                          print(`echo : ${args._[0]}`);
                          alert('Echo :'+`echo : ${args._[0]}`);

                          if(args._[0]=='bash') {
                            print(` You 're Welcome ${localStorage.getItem('username')}`);
                          }
                        },
                        options: [
                          {
                            name: 'hello',
                            description: 'start word',
                            defaultValue: 'hi !',
                          },]
                      },
                      'filemaker': {
                        method: (args, print) => {
                          print(` ${args._[0] || `${localStorage.getItem('script')}`}`);

                        },
                        options: [
                          {
                            name:'filemaker',
                            description: 'run script code',
                            defaultValue: 'script !',
                          },]
                      } ,
                      'run': {
                        method: (args, print) => {
                          print(`code : ${args._[0] || `${this.state.script}`}`);
                          {args._[0]}
                          if(args._[0]=='script') {
                            // window.write(localStorage.getItem('script'))
                            <CodeComponent body={localStorage.getItem('script')}/>
                          }

                          if(args._[0]=='any') {
                            console.log(this.state.script);
                            print(`code : ${args._[0] || `${this.state.script}`}`);

                          }
                        },
                        options: [
                          {
                            name: 'run',
                            description: 'snippets',
                            defaultValue: 'hi !',
                          },]
                      },
                      'time': {
                        method: (args, print) => {
                          print(`it's ${args._[0] || `${this.state.date.toLocaleTimeString()}`}`);
                          if(args._[0]=='bash') {
                            print(` You 're Welcome  ${args._[0] || `${localStorage.getItem('username')}`}`);
                          }

                        },
                        options: [
                          {
                            name: 'time',
                            description: 'information about time',
                            defaultValue: 'Now!',
                          },]
                      },
                      color: {
                        method: (args, print) => {
                          print(`The color is ${args._[0] || args.color}`);
                        },
                        options: [
                          {
                            name: 'color',
                            description: 'The color the output should be',
                            defaultValue: 'white',
                          },
                        ],
                      },

//http://bgrins.github.io/devtools-snippets/#console-save
                      popup: () => alert('popup message you can run it')
                    }}
                    descriptions={{
                      'open-google': 'opens google.com',
                      showmsg: 'shows Command',
                      'jsbin': 'open jsbin online debugger',
                      'welcome': 'open start page',
                      'print': 'print page',
                      'write': 'write snippet / makefile script',
                      'facebook':'open facebook page',
                      'echo [text]': 'write string in console ',
                      'color [text]': 'color text ',
                      'time': ' date now KSA ',
                      alert: 'alert',
                      popup: 'Show Msg'
                    }}
                    watchConsoleLogging
                    msg='Nouha Version 1.1.0$ Copyright (c) 2018 - Tout droit réservé.'
                  />
                  <br/>
                </div>
              </Card>
            </Paper>
          </div>
        </div>
      );
    }
    return (
      <div className="-align-right">
        <h3>LogIn </h3>
        <p>Info : you can use devtools with Google Chrome and Fire Fox </p>
        <p>  Login and then enjoy console </p>
        {this.handleBrowser.bind(this)}
      </div>
    );

  }
}




