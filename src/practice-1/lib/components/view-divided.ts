import { LitElement, html, css, HTMLTemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { userData } from './data';
import { UserData } from './types';

// import './user-list';
import './user-info-card';

@customElement('view-divided')
class ViewDivided extends LitElement{

  static styles = css`
    div.grid-columns{
      position:relative;
      margin:.5rem;
      display: grid;
      grid-template-columns: 250px 1fr;
      column-gap: 1rem;
    }
    aside.left-side{
      background-color: #27274dd5;
      padding: 1rem;
      height:fit-content;
    }
    
    li.user{
      list-style: none;
      margin: 1.7rem 0;
    }
    li.user a{
      text-decoration: none;
      color: #86d0ad
    }
  `;
  
  userId?:number;

  protected render(): HTMLTemplateResult {

    return html`
      <div class=grid-columns>
        <aside class=left-side>
        <ul class=users-list>
          <!-- <users-list .usersList=${userData}></users-list> -->
            ${
              userData?.map(({fullname, id}:UserData)=>(
                html`
                  <li class=user>
                    <a href=# @click=${()=> this.getUserId(id)}>
                      ${fullname}
                    </a>
                  </li>
                `
              ))
            }
          </ul>        </aside>

        <div class=right-side>
          <user-info-card .userId=${this.userId} ></user-info-card>
        </div>
      </div>
    `
  }


  getUserId(userId:number){
    this.userId = userId;
    // this.requestUpdate('userId', this.userId);
    this.requestUpdate();
  }

}

declare global{
  interface HTMLElementTagNameMap{
    'view-divided' : ViewDivided
  }
}