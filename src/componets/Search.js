import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.title} onChange={this.handleChange} />
          <input type="submit" value="Find Your GIFs" />
        </form>
      </div>
    );
  }

  handleChange = (event) => {
    const title = event.target.value;
    this.setState({ title: title });
  };

  handleSubmit = (event) => {
    const { getUrls } = this.props;
    event.preventDefault();
    getUrls(this.state.title);
    //this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
}

export default Search;
