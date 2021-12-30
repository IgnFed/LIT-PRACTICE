import { LitElement, html, css, HTMLTemplateResult } from 'lit';
import { customElement, property,} from 'lit/decorators.js';
import { UserData } from './types';

@customElement('users-list')
class UsersList extends LitElement{

  static styles = css`

    li.user{
      list-style: none;
      margin: 2.7rem 0;
    }
    li.user a{
      text-decoration: none;
      color: #86d0ad
    }

  `;
  @property({type: Array})
  usersList?: UserData[];

  @property()
  getUserId:((userId:number)=>void) = ()=>{}

  protected render(): HTMLTemplateResult {
      
    return html`
            <ul class=users-list>
            ${
              this.usersList?.map(({fullname, id}:UserData)=>(
                html`
                  <li class=user>
                    <a href=# @click=${()=> this.getUserId(id)}>
                      ${fullname}
                    </a>
                  </li>
                `
              ))
            }
          </ul>

    `
  }

}

declare global{
  interface HTMLElementTagNameMap{
    'users-list' : UsersList
  }
}