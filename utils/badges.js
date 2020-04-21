// Module which deals with SHIELDS badges
// ===> https://shields.io/category/downloads <===
// It allows to generate SHIELDS badges in MARKDOWN format.
// The following badges are available:
// - GitHub number of pull requests
// - GitHub repository size
// - WebSite 

function badges(shields,style,user,repo,website) {

    // shields style => plastic, flat, flat_square, for-the-badge, social
    this.style = style;

    // user defined attributes
    this.shieldsUser = user;
    this.shieldsRepo = repo;
    this.shieldsWebSite = website;

    // array of available badges
    // 0 => pull requests
    // 1 => repository size
    // 2 => website 
    this.shields = [
      `'![GitHub pull requests](https://img.shields.io/github/issues-pr/${this.shieldsUser}/${this.shieldsRepo })'`,
      `'![GitHub repo size](https://img.shields.io/github/repo-size/${this.shieldsUser}/${this.shieldsRepo}?style=${this.shieldsStyle})'`,
      `'![Website](https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2F${this.shieldsWebSite})'`,
    ]
      
  };

// export constructor
module.exports = badges;
  