import React, { Component } from "react";
import save from "../component/save/save"
import FromBtn from "../component/search/Form"
import Input from "../component/search/Form"
import TextArea from "../component/search/Form"


class Home extends Component {
    state = {
      title: "",
      books: [],
      authors: [],
      description: "",
      image: "",
      link: ""
    };

    componentDidMount() {}

    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
    handleFormSubmit = event => {
      event.preventDefault();
  
      API.searchBooks(this.state.title)
        .then(res => {
          let books = res.data.items;
          console.log(books);
  

          books.forEach(book => {
            let title = book.volumeInfo.title;
            let authors = book.volumeInfo.authors;
            let description = book.volumeInfo.description;
            let image = book.volumeInfo.imageLinks.thumbnail;
            let link = book.selfLink;
  

            console.log(`
            ${title}
            ${authors}
            ${image}
            ${link}
            ${description}
            `);
  
            this.setState({
              books: books,
              title: title,
              authors: authors,
              description: description,
              image: image,
              link: link
            });
          });
        })
        .catch(err => console.log(err));
  
      this.setState({
        title: "",
        books: [],
        authors: [],
        description: "",
        image: "",
        link: ""
      });
    };
    handleOnClick = event => {
      event.preventDefault();
      API.saveBook({
        title: this.state.title,
        authors: this.state.authors,
        description: this.state.description,
        image: this.state.image,
        link: this.state.link
      })
        .then(res => alert("Saved"))
        .catch(err => console.log(err));
    };

    render() {
        return (
        <div>
            <h1>Search for your favorite Books online</h1>

            <Input name="search" placeholder="Search" />
            <FormBtn>Submit</FormBtn>
        </div>
        )
    }

}