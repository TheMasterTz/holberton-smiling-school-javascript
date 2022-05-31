# 0x0B. Implement a design with bootstrap

## Details

      By Nicolas Philippot, UI/UX designer and Guillaume Salva, CTO at Holberton School          Weight: 3              Project over - took place from May 8, 2022  to May 16, 2022           - you're done with 100% of tasks.                Manual QA review was done by Juan David Avila Caycedo            on May 15, 2022 12:29 AM#### In a nutshell…

* Manual QA review:          366.0/366 mandatory
* Altogether:         100.0%* Mandatory: 100.0%
* Optional: no optional tasks

In this project, you will implement 3 web pages with Bootstrap.You will use all HTML/CSS/Accessibility/Responsive design/Bootstrap knowledges that you learned previously.
You won’t have a lot of instruction, you are free to implement it the way that you want - the objective is simple: Have fully functional web pages that look the same as the designer file.
Here the final result:
 ![Alternate text](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/3c71cc99d2fc1c12a3d3.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220530%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220530T163244Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=36d5721ff6c089c7c1764d617b79e68e608d5e10217e5eb3e7b3a296015183c9)

This webpage has been designed by Nicolas Philippot, UI/UX designer. You can find final screens  [here](https://intranet-projects-files.s3.amazonaws.com/holbertonschool-webstack/623/Archive.zip)

### Requirements

* You have to use Bootstrap
* Your  ` styles.css `  must be as small as you can - you must use as much as you can Bootstrap classes

### Imports

For this project, you will need: fonts from Google, JQuery, Bootstrap CSS/JS

```html

<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Coiny&display=swap" rel="stylesheet">

<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

```

## Tasks

### 0. Read and be familiar with Figma

          mandatory         Progress vs Score           Score: 100.00% (Checks completed: 100.00%)         Task Body Create an account in  [Figma](https://intranet.hbtn.io/rltoken/0OS4ME4Kjnw0I82IVkkoSw)
  and open these files:

* [Homepage](https://intranet.hbtn.io/rltoken/RLej4Ua6W3EmDh7UCwGTzQ)

* [fig file](https://intranet.hbtn.io/rltoken/1ZTxYF-usvxpIjj44YYcyw)

* [Pricing](https://intranet.hbtn.io/rltoken/xQCL77_ePGWntUAe4T7ebQ)

* [fig file](https://intranet.hbtn.io/rltoken/AdJ6ZyZrG90gRNAI5bt_lA)

* [Courses](https://intranet.hbtn.io/rltoken/__3w9ryapSUAwMaAYYS6ZA)

* [fig file](https://intranet.hbtn.io/rltoken/1JL-gCkfJ5Hqb0Sf2lmymw)

And “Duplicate to your Drafts” to have access to all design details.
 ![Alternate text](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/559ad8d43fb61e310e2b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220530%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220530T163244Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=3dc275bd0ab8904e2a9d81e2cf06a1153daa5cbecae93af665752a53407f3169)

Important notes with Figma:

* if your computer doesn’t have missing fonts, you can find them here: [source-sans-pro](https://intranet.hbtn.io/rltoken/4uQkoVbAjr7lRVqSVCWBcw)
 and [Spin-Cycle-OT](https://intranet.hbtn.io/rltoken/5HnXzrMbtVKLCScrdy4CIg)

* some values are in float - feel free to round them
* “Be pixel perfect” - yes! but mainly make sure colors, size and position are correct. #C271FF is not purple.
For this task, please write an amazing   ` README.md `
Interactions note:
* Web pages must switch to the tablet version when the screen width is 768px
* Web pages must switch to the mobile version when the screen width is 576px
* button hover/active:  ` opacity: 0.9 `
 Task URLs  Github information Repo:
* GitHub repository:  ` holberton-smiling-school `
* File:  ` README.md `
 Self-paced manual review  Panel footer - Controls

### 1. Header first

          mandatory         Progress vs Score           Score: 100.00% (Checks completed: 100.00%)         Task Body Let’s start by the Homepage:  create the header/hero piece
Here an archive of all assets needed (for the entire project):

* [images_images.zip](https://holbertonintranet.s3.amazonaws.com/uploads/misc/2020/3/e62e701b6ce0374555e9.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220530%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220530T163244Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=4a65dd5d35a792e4861794a7faf31b54a70d611824ae7a028f6bbfde6e99d365)

* [holberton_school-icon.zip](https://holbertonintranet.s3.amazonaws.com/uploads/misc/2020/3/7159d988278de54d859d.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220530%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220530T163244Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=e1b689e8a884519d2af0c89963c38051abf09becfff7cb42ba8ad3f286f0a4f9)

Desktop:
 ![Alternate text](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/4/13572c3773e26651761e8b4a74b3383300ed9563.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220530%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220530T163244Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=b6c2e7c4e6e19acc50050c41d1245d4158f64b8f5bff5646cb499a1288e7ce0e)

Mobile:
 ![Alternate text](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/8854d68a957ef7dc2315.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220530%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220530T163244Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=1f20974d8c6e66a5a064553fd807a6e1578850195c6d3b7b2251957f03a7c560)

 Task URLs  Github information Repo:

* GitHub repository:  ` holberton-smiling-school `
* File:  ` 0-homepage.html, styles.css `
 Self-paced manual review  Panel footer - Controls

### 2. Carousel of quotes

          mandatory         Progress vs Score           Score: 100.00% (Checks completed: 100.00%)         Task Body Create the section “Carousel of quotes”
By using a Carousel component of Bootstrap, create this Carousel of quotes.
You can have for the moment one quote or twice the same for testing (like example below)
 ![Alternate text](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/8455560f9ac188658195.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220530%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220530T163244Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=4217ec04c4d449e0273dd17686996e5dbb6cf89ca3e429fc8ef46fe4d8f8d301)

 Task URLs  Github information Repo:

* GitHub repository:  ` holberton-smiling-school `
* File:  ` 1-homepage.html, styles.css `
 Self-paced manual review  Panel footer - Controls

### 3. Popular videos

          mandatory         Progress vs Score           Score: 100.00% (Checks completed: 100.00%)         Task Body Create the section “Most popular tutorials”
By using a Carousel component of Bootstrap, create this Carousel of video cards.
Reminder:

* Desktop: 4 cards
* Tablet: 2 cards
* Mobile: 1 card
 ![Alternate text](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/4b610dc2d2cc17ceb2f7.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220530%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220530T163244Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=5fcad227ba3feb3f12f8fe1ff793b136d6a2f71bda231f7a1593b329b287f8aa)

 Task URLs  Github information Repo:

* GitHub repository:  ` holberton-smiling-school `
* File:  ` 2-homepage.html, styles.css `
 Self-paced manual review  Panel footer - Controls

### 4. Row of smiles

          mandatory         Progress vs Score           Score: 100.00% (Checks completed: 100.00%)         Task Body Create the section “Free membership”
 ![Alternate text](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/970efd54768b693bbfac.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220530%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220530T163244Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=519bcb5213024ee86c32086d5ce4304c742b98950e177df22d80730a249b0547)

 Task URLs  Github information Repo:

* GitHub repository:  ` holberton-smiling-school `
* File:  ` 3-homepage.html, styles.css `
 Self-paced manual review  Panel footer - Controls

### 5. Latest videos

          mandatory         Progress vs Score           Score: 100.00% (Checks completed: 100.00%)         Task Body Create the section “Latest videos”
Copy the block “Most popular tutorials” to “Latest videos”
 Task URLs  Github information Repo:

* GitHub repository:  ` holberton-smiling-school `
* File:  ` 4-homepage.html, styles.css `
 Self-paced manual review  Panel footer - Controls

### 6. ... and the footer

          mandatory         Progress vs Score           Score: 100.00% (Checks completed: 100.00%)         Task Body Create the footer
 ![Alternate text](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/739d7cc60098e7ff8f25.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220530%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220530T163244Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=ecb57d81db25c47b274471732f611e902dde9aed177100fc63e72a550c300259)

 Task URLs  Github information Repo:

* GitHub repository:  ` holberton-smiling-school `
* File:  ` homepage.html, styles.css `
 Self-paced manual review  Panel footer - Controls

### 7. Pricing - header

          mandatory         Progress vs Score           Score: 100.00% (Checks completed: 100.00%)         Task Body Now, let’s do the pricing page:  create the header/hero piece
The mobile version must be the same as the Homepage - it’s time to reuse code!
Desktop:
 ![Alternate text](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/ccd30a4d80a990b96740.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220530%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220530T163244Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=b193ab5063f266fc4a3d37b207e601ab5b2ea527668d06b4a08b12dd03c89b3f)

 Task URLs  Github information Repo:

* GitHub repository:  ` holberton-smiling-school `
* File:  ` 0-pricing.html, styles.css `
 Self-paced manual review  Panel footer - Controls

### 8. Prices grid

          mandatory         Progress vs Score           Score: 100.00% (Checks completed: 100.00%)         Task Body Create the prices grid
Desktop:
 ![Alternate text](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/0ac3872946a0014e4f99.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220530%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220530T163245Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=016be39f8c6f6d80524dee0d1f6ff090a2cc78012ed7c07a3c2735a1e2433ed4)

Mobile:
 ![Alternate text](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/edea8172b9cc0a867237.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220530%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220530T163245Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=6dee08cb1fedbf1cee6d0dec3b1546f82e1c4a6ebec9782763d9e65e52baf84f)

 Task URLs  Github information Repo:

* GitHub repository:  ` holberton-smiling-school `
* File:  ` 1-pricing.html, styles.css `
 Self-paced manual review  Panel footer - Controls

### 9. Quotes section

          mandatory         Progress vs Score           Score: 100.00% (Checks completed: 100.00%)         Task Body Same as the Homepage,  create the Carousel of quotes
 Task URLs  Github information Repo:

* GitHub repository:  ` holberton-smiling-school `
* File:  ` 2-pricing.html, styles.css `
 Self-paced manual review  Panel footer - Controls

### 10. FAQ

          mandatory         Progress vs Score           Score: 100.00% (Checks completed: 100.00%)         Task Body Create the FAQ grid
Desktop:
 ![Alternate text](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/db8f90e37593a29c1ab6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220530%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220530T163245Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=1ea3347083fb84875ac84741fc868594282d014daacf3225b582c7c98a2fec37)

Mobile:
 ![Alternate text](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/eaeb117d40690a451c7b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220530%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220530T163245Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=0b9367c8afda23a64be43915e4232e0014719855e53aaf534d5bf2c431ddb6de)

 Task URLs  Github information Repo:

* GitHub repository:  ` holberton-smiling-school `
* File:  ` 3-pricing.html, styles.css `
 Self-paced manual review  Panel footer - Controls

### 11. Close the page with a footer

          mandatory         Progress vs Score           Score: 100.00% (Checks completed: 100.00%)         Task Body Same as Homepage,  create the footer
 Task URLs  Github information Repo:

* GitHub repository:  ` holberton-smiling-school `
* File:  ` pricing.html, styles.css `
 Self-paced manual review  Panel footer - Controls

### 12. Courses - header

          mandatory         Progress vs Score           Score: 100.00% (Checks completed: 100.00%)         Task Body Now, let’s do the courses page:  create the header/hero piece
The mobile version must be the same as the Homepage - it’s time to reuse code!
Desktop:
 ![Alternate text](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/a5ba265af5dd643ad942.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220530%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220530T163245Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=a9a5225ac8f90610a08f0b3430e3a424e1260f0724e709e0058323dff01af75b)

 Task URLs  Github information Repo:

* GitHub repository:  ` holberton-smiling-school `
* File:  ` 0-courses.html, styles.css `
 Self-paced manual review  Panel footer - Controls

### 13. Search filters

          mandatory         Progress vs Score           Score: 100.00% (Checks completed: 100.00%)         Task Body Create the search filters section
Dropdown is a nice way to create filters.
For the selected/placeholder value of both dropdown, no need to have dynamic value - static content is totally ok.
Desktop:
 ![Alternate text](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/98c0564e59ec5620990e.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220530%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220530T163245Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=52a5be68222fc1096bb92e45485f0d9d77379e6589451c0b6b80f4b8a7f04729)

Tablet/Mobile:
 ![Alternate text](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/3627550eccca7958d390.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220530%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220530T163245Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=a0b1bb41186746915a76b150487492533468ea72c94d090cf0e47a09a8cf7652)

 Task URLs  Github information Repo:

* GitHub repository:  ` holberton-smiling-school `
* File:  ` 1-courses.html, styles.css `
 Self-paced manual review  Panel footer - Controls

### 14. List of result

          mandatory         Progress vs Score           Score: 100.00% (Checks completed: 100.00%)         Task Body Create the result section of courses
You can reuse the same cell for testing. Don’t forget to test with odd and even number of cells.

 ![Alternate text](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/76b2074f3f6bbd25cdb9.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220530%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220530T163245Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=90e407ebf19f7c628cbced00136b63ab5958de05334b84b1999f19fc4c1944d3)

 Task URLs  Github information Repo:

* GitHub repository:  ` holberton-smiling-school `
* File:  ` 2-courses.html, styles.css `
 Self-paced manual review  Panel footer - Controls

### 15. Close the page with a footer

          mandatory         Progress vs Score           Score: 100.00% (Checks completed: 100.00%)         Task Body Same as Homepage and Pricing page,  create the footer
 Task URLs  Github information Repo:

* GitHub repository:  ` holberton-smiling-school `
* File:  ` courses.html, styles.css `
 Self-paced manual review  Panel footer - Controls
Ready for a new manual review
