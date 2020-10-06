import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsersComponent } from './users/users.component';
import {RouterModule, Routes} from '@angular/router';
import { EmailComponent } from './email/email.component';
import { CommentsComponent } from './comments/comments.component';
import {UsersResolverService} from './services/users-resolver.service';
import {EmailResolverService} from './services/email-resolver.service';
import {CommentsResolverService} from './services/comments-resolver.service';
import { UserPostComponent } from './user-post/user-post.component';
import { CommonModule } from '@angular/common';
import { PostCommentComponent } from './post-comment/post-comment.component';
import { EmailCommentsComponent } from './email-comments/email-comments.component';
import {UserPostResolverService} from './services/user-post-resolver.service';
import {PostCommentResolverService} from './services/post-comment-resolver.service';
// import { TodosComponent } from './modules/todos/todos.component';
import { UserFormsComponent } from './forms/user-forms/user-forms.component';
import { UsersPipe } from './pipes/users.pipe';




const routes: Routes = [
  {path: 'users', component: UsersComponent, resolve: {allUsers:UsersResolverService}, children: [
      {path: ':id/posts' , component: UserPostComponent, resolve:{allUserPost:UserPostResolverService}, children:[
          {path: ':idPosts/comments',component: PostCommentComponent, resolve:{allPostComment:PostCommentResolverService }}
        ]}
    ]},
  {path: 'email', component: EmailComponent, resolve: {allEmails:EmailResolverService}, children:[
      {path:':idComments',component: EmailCommentsComponent }
    ]},
  {path: 'comments', component: CommentsComponent, resolve: {allComments:CommentsResolverService }},
  {path: 'forms',component: UserFormsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EmailComponent,
    CommentsComponent,
    UserPostComponent,
    PostCommentComponent,
    EmailCommentsComponent,
    // TodosComponent
    UserFormsComponent,
    UsersPipe,




  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
