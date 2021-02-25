import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  readonly api_url = "https://jsonplaceholder.typicode.com/todos/1";
  posts: any;
  newPost: any;

  constructor(private http: HttpClient) {}

  getPosts() {
    this.posts = this.http.get(this.api_url + "/posts");
  }

  createPost() {
    const data = {
      id: 4,
      userId: 23,
      body: "Hello World!"
    };

    this.newPost = this.http.post(this.api_url + "/posts", data);
  }

  deletePost() {
    this.newPost = this.http.delete(this.api_url + "/posts");
  }

  updatePost() {
    const body = { title: "My new Post" };
    this.newPost = this.http.put(this.api_url, body);
  }

  p: number = 1;
}
