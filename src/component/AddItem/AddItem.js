import React ,{Component} from 'react'

class AddItem extends Component {

   render(){
     return(
            <div>
                <form>
                    <input type="text" placeholder = "enter userName..."id="name" onChange={this.handleChange}/>
                    <input type="numper" placeholder = "enter password..."id="password" onChange={this.handleChange}/>
                    <input type="submit" value="login"/>
                </form>
            </div>
        )
     }
 }
export default AddItem; 