// without the id, we would get a warning like this:
// Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of CommentList. See https://fb.me/react-warning-keys for more information.
var data = [
  {id: "1234", author: "Pete Hunt", text: "This is one comment"},
  {id: "5678", author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment key={comment.id} author={comment.author}>
          {comment.text}
        </Comment>
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});

    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});

React.render(
  <CommentBox data={data} />,
  document.getElementById('content'));
