import React, {Component} from "react"
import Axios from "axios";

const margin = {
    marginLeft: 10
}

const marginTop = {
    marginTop: 40
}

export class AddAuthor extends Component {

    constructor(props) {
        super(props)
        this.state = {
            authors: [],
            firstname: "",
            lastname: ""
        }

        this.onChangeFirstName = this.onChangeFirstName.bind(this)
        this.onChangeLastName = this.onChangeLastName.bind(this)
        this.addAuthor = this.addAuthor.bind(this)
    }

    onChangeLastName(e){
        this.setState({lastname: e.target.value})
    }

    onChangeFirstName(e){
        this.setState({firstname: e.target.value})
    }

    componentDidMount() {
        Axios.get("http://localhost:3000/authors")
            .then(res => {this.setState({authors: res.data})})
    }

    addAuthor(){
        Axios.post("http://localhost:3000/author", {
            firstname: this.state.firstname,
            lastname: this.state.lastname
        })
            .then(res => {
                this.setState({authors: res.data})
            })
    }

    render() {
        return(
            <div className="container" style={marginTop}>
                <div className="row">
                    <div className="col-3" />
                    <div className="col">
                        <label><p>To add a new author, fill in the fields below and click the "Submit" button.</p></label>
                        <form className="row row-cols-3 g-3 align-items-center">
                            <div className="col-10">
                                <div className="input-group">
                                    <div className="input-group-text">Firstname</div>
                                    <input type="text" className="form-control" id="inlineFormInputGroupUsername"
                                           onChange={this.onChangeFirstName}/>
                                    <div className="input-group-text">Lastname</div>
                                    <input type="text" className="form-control" id="inlineFormInputGroupUsername"
                                           onChange={this.onChangeLastName}/>
                                </div>
                            </div>

                            <div className="col-2">
                                <button type="button" className="btn btn-primary" onClick={this.addAuthor}>Submit</button>
                            </div>
                        </form>
                        {
                            <div className="row">
                                <table className="table" style={marginTop}>
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Firstname</th>
                                        <th scope="col">Lastname</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.authors.map((author, i) =>
                                            <tr key={i}>
                                                <th scope="row">{this.props.key}</th>
                                                <td scope="col" key={author.firstname}>{author.firstname}</td>
                                                <td scope="col" key={author.lastname}>{author.lastname}</td>
                                            </tr>
                                        )
                                    }
                                    </tbody>
                                </table>
                            </div>
                        }
                    </div>
                    <div className="col-3" />
                </div>
            </div>
        )
    }
}