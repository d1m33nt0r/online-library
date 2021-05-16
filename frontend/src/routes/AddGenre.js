import React, {Component} from "react"
import Axios from "axios";

const margin = {
    marginLeft: 10
}

const marginTop = {
    marginTop: 40
}

export class AddGenre extends Component {

    constructor(props) {
        super(props)
        this.state = {
            genres: [],
            genrename: ""
        }

        this.addGenre = this.addGenre.bind(this)
        this.onChangeGenreName = this.onChangeGenreName.bind(this)
    }

    addGenre() {
        Axios.post("http://localhost:3000/genre", {
            genrename: this.state.genrename
        })
            .then(res => {
                this.setState({genres: res.data, genrename: ""})
            })
    }

    onChangeGenreName(e){
        this.setState({genrename: e.target.value})
    }

    componentDidMount() {
        Axios.get("http://localhost:3000/genres")
            .then(res => {this.setState({genres: res.data})})
    }

    render() {
        return(
            <div className="container" style={marginTop}>
                <div className="row">
                    <div className="col-3" />
                    <div className="col">
                        <label><p>To add a new genre, fill in the field below and click the "Submit" button.</p></label>
                        <form className="row row-cols-3 g-3 align-items-center">
                            <div className="col-10">
                                <div className="input-group">
                                    <div className="input-group-text">Genre</div>
                                    <input type="text" className="form-control" id="inlineFormInputGroupUsername"
                                           placeholder="Horror" onChange={this.onChangeGenreName}/>
                                </div>
                            </div>

                            <div className="col-2">
                                <button type="button" className="btn btn-primary" onClick={this.addGenre}>Submit</button>
                            </div>
                        </form>

                        {
                            <div className="row">
                                <table className="table" style={marginTop}>
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Genre</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.genres.map((genre, i) =>
                                            <tr key={i}>
                                                <th scope="row">{i + 1}</th>
                                                <td scope="col" >{genre.name}</td>
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