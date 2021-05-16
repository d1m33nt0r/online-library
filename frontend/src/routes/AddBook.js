import React, {Component} from "react"
import Axios from "axios";

const margin = {
    marginLeft: 10
}

export class AddBook extends Component {

    constructor(props) {
        super(props)
        this.state = {
            genres: [],
            authors: [],
            publishers: [],
            codes_isbn: []
        }

        this.onChangeCountInstances = this.onChangeCountInstances.bind(this)
        this.onChangeCodeInstance = this.onChangeCodeInstance.bind(this)
    }

    componentDidMount() {
        Axios.get("http://localhost:3000/genres")
            .then(res => {this.setState({genres: res.data})})

        Axios.get("http://localhost:3000/authors")
            .then(res => {this.setState({authors: res.data})})

        Axios.get("http://localhost:3000/publishers")
            .then(res => {this.setState({publishers: res.data})})
    }

    onChangeCountInstances(e){
        let arr = []
        for (let i = 0; i < e.target.value; i++)
        {
            arr.push("")
        }
        this.setState({codes_isbn: arr})
    }

    onChangeCodeInstance(e, i){
        let codes = this.state.codes_isbn
        codes[i] = e.target.value
        this.setState({codes_isbn: codes})
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-2" />
                    <div className="col">
                        <form>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon3">Book title</span>
                                <input type="text" className="form-control" id="basic-url"
                                       aria-describedby="basic-addon3" />

                                <select className="form-select" aria-label="Default select example">
                                    <option>Choose book genre</option>
                                    {
                                        this.state.genres.map((genre, i) =>
                                            <option key={i} value={genre.id}>{genre.name}</option>
                                        )
                                    }
                                </select>
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Author</span>
                                <select className="form-select" aria-describedby="basic-addon1" aria-label="Default select example">
                                    <option></option>
                                    {
                                        this.state.authors.map((author, i) =>
                                            <option key={i} value={author.id}>{author.firstname + " " + author.lastname}</option>
                                        )
                                    }
                                </select>
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon2">Publisher</span>
                                <select className="form-select" aria-describedby="basic-addon2" aria-label="Default select example">
                                    <option></option>
                                    {
                                        this.state.publishers.map((publisher, i) =>
                                            <option key={i} value={publisher.id}>{publisher.name}</option>
                                        )
                                    }
                                </select>
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon3">Year publishing</span>
                                <input type="text" className="form-control" id="basic-url"
                                       aria-describedby="basic-addon3" />

                                <span className="input-group-text" id="basic-addon3">Count pages</span>
                                <input type="text" className="form-control" id="basic-url"
                                       aria-describedby="basic-addon3" />

                                <span className="input-group-text" id="basic-addon3">Price</span>
                                <input type="text" className="form-control" id="basic-url"
                                       aria-describedby="basic-addon3" />
                            </div>

                            <div className="mb-3">
                                <span className="input-group-text" id="basic-addon3">Count instances
                                <input type="text" className="form-control" id="basic-url"
                                       aria-describedby="basic-addon3" style={margin} onChange={this.onChangeCountInstances} />
                                </span>
                                {
                                    this.state.codes_isbn.map((code, i) =>
                                        <div key={i} >
                                            <span className="input-group-text" id="basic-addon4">Code</span>
                                            <input type="text" className="form-control" id="basic-url"
                                                   aria-describedby="basic-addon4"
                                                   value={this.state.codes_isbn[i]}
                                                   onChange={(e) => this.onChangeCodeInstance(e, i)} />
                                        </div>
                                    )
                                }
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="col-2" />
                </div>
            </div>
        )
    }
}