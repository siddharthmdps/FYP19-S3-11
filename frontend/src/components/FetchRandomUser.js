import React from 'react'

export default class FetchRandomUser extends React.Component {

    state = {
        loading: true,
        person: null
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/"       
        const response = await fetch(url)
        const data = await response.json()

        //console.log(data.results[0])
        this.setState({person: data.results[0], loading: false})
    }

    // const dummyText = () => (
    //     <div>
    //     <p>
    //     Writers write descriptive paragraphs because their purpose is to describe something. Their point is that something is beautiful or disgusting or strangely intriguing. Writers write persuasive and argument paragraphs because their purpose is to persuade or convince someone. Their point is that their reader should see things a particular way and possibly take action on that new way of seeing things. Writers write paragraphs of comparison because the comparison will make their point clear to their readers.
    //     </p>
    //     </div>
    // )

    render() {
        console.log(this.state.person)
        console.log(this.state.loading)
        return (
            <div className="container">
                {this.state.loading || !this.state.person ? 
                (<div>Loading...</div>)  : 
                (
                    <div>
                        <div>{this.state.person.name.title}</div>
                        <div>{this.state.person.name.first}</div>
                        <div>{this.state.person.name.last}</div>
                        <img src={this.state.person.picture.large}></img>
                    </div>
                )}
            </div>
        )
    }

}