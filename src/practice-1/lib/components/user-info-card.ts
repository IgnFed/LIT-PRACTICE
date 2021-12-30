import { LitElement, html, css, HTMLTemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { cardInfo } from './data';
import { CardInfo } from './types';

@customElement('user-info-card')
class UserInfoCard extends LitElement{

  static styles = css`
    article.card{
      display:flex;
      flex-direction:column;
      padding:1rem;
      align-items:center;
      background-color: #72e8dc6c;
      box-shadow: 0 5px 5px 5px rgba(0,0,0,.5);
    }
    header.image-container{
      height:200px;
    }
    header.image-container img{
      width:100%;
      height:100%;
      object-fit:contain;
    }
    footer.content{
      width:fit-content;
    }
    footer.content button#edit{
      padding:1rem;
      border-radius:1rem;
      width:200px;  
    }
  `

  @property({type:Number})
  userId?:number;

  @state()
  userDetail?:CardInfo;


  // userData?: typeof cardInfo[0] = this.getUserData() || {} as typeof cardInfo[0];

  protected render(): HTMLTemplateResult {
    if(this.userId === undefined || this.userId < 0) return html``;

    return html`
    <article class=card>
        <header class=image-container>
          <img src="/src/practice-1/public/avatar-defaul.png" />
        </header>
        <footer class=content>
          
          <h1>Role: ${this.userDetail?.role}</h1>
          <p>Fullname: ${this.userDetail?.fullname}</p>
          <p>User Detail: ${this.userDetail?.country}</p>
          <button type=button id=edit>Edit</button>
        </footer>
      </article>
    `
  }


  updated(): void {
      this.userDetail = this.getUserDetail(this.userId!);
  }

  getUserDetail(userId:number){
    return cardInfo[userId]
  }
}

declare global{
  interface HTMLElementTagNameMap{
    'user-info-card': UserInfoCard
  }
}