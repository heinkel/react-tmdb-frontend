import React, { Component } from 'react'
import MovieList from './MovieList'
import classnames from 'classnames'
import { browserHistory } from 'react-router'
import { Circle } from 'rc-progress'

import './MovieDetail.scss'

export default class MovieDetail extends Component {
  static propTypes = {
    genres: React.PropTypes.array,
    params: React.PropTypes.object
  }
  constructor(props) {
    super(props)

    this.state = {
      movie: null,
      images: null,
      credits: null
    }
  }
  componentDidMount() {
    // fetch(`https://api.themoviedb.org/3${`/movie/${this.props.params.movieId}`}?api_key=${process.env.TMDB_API_KEY}`)
    // .then(r => r.json())
    // .then(blob => {
    //   console.log(blob)
    // })
    // fetch(`https://api.themoviedb.org/3${`/movie/${this.props.params.movieId}/images`}?api_key=${process.env.TMDB_API_KEY}`)
    // .then(r => r.json())
    // .then(blob => {
    //   console.log(blob)
    // })
    // fetch(`https://api.themoviedb.org/3${`/movie/${this.props.params.movieId}/credits`}?api_key=${process.env.TMDB_API_KEY}`)
    // .then(r => r.json())
    // .then(blob => {
    //   console.log(blob)
    // })

    setTimeout(() => {
      this.setState({
        movie: {"adult":false,"backdrop_path":"/g54J9MnNLe7WJYVIvdWTeTIygAH.jpg","belongs_to_collection":null,"budget":108000000,"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":37,"name":"Western"}],"homepage":"","id":333484,"imdb_id":"tt2404435","original_language":"en","original_title":"The Magnificent Seven","overview":"A big screen remake of John Sturges' classic western The Magnificent Seven, itself a remake of Akira Kurosawa's Seven Samurai. Seven gun men in the old west gradually come together to help a poor village against savage thieves.","popularity":37.19583,"poster_path":"/z6BP8yLwck8mN9dtdYKkZ4XGa3D.jpg","production_companies":[{"name":"Columbia Pictures","id":5},{"name":"Village Roadshow Pictures","id":79},{"name":"Escape Artists","id":1423},{"name":"Metro-Goldwyn-Mayer (MGM)","id":8411},{"name":"LStar Capital","id":34034},{"name":"Pin High Productions","id":79566}],"production_countries":[{"iso_3166_1":"US","name":"United States of America"}],"release_date":"2016-09-14","revenue":0,"runtime":132,"spoken_languages":[{"iso_639_1":"en","name":"English"}],"status":"Released","tagline":"Justice has a number.","title":"The Magnificent Seven","video":false,"vote_average":4.7,"vote_count":319}// eslint-disable-line
      })
    }, 1000)

    setTimeout(() => {
      this.setState({
        images: {"id":333484,"backdrops":[{"aspect_ratio":1.77777777777778,"file_path":"/g54J9MnNLe7WJYVIvdWTeTIygAH.jpg","height":2160,"iso_639_1":null,"vote_average":5.3125,"vote_count":1,"width":3840},{"aspect_ratio":1.77777777777778,"file_path":"/T3LrH6bnV74llVbFpQsCBrGaU9.jpg","height":1080,"iso_639_1":null,"vote_average":5.3125,"vote_count":1,"width":1920},{"aspect_ratio":1.77777777777778,"file_path":"/X18fazK33pS29TKpcAHqDpCh2I.jpg","height":1080,"iso_639_1":null,"vote_average":5.24542124542125,"vote_count":2,"width":1920},{"aspect_ratio":1.77777777777778,"file_path":"/yggMyifLPijn9w1tDkOQOAh4qG9.jpg","height":1080,"iso_639_1":null,"vote_average":5.17113095238095,"vote_count":1,"width":1920},{"aspect_ratio":1.7797552836485,"file_path":"/efBlxYeoiFIcDW0SOtkOIS862NU.jpg","height":899,"iso_639_1":null,"vote_average":0,"vote_count":0,"width":1600},{"aspect_ratio":1.7797552836485,"file_path":"/4zG9gD1SjXNgpwmwPFLQpUzFJTk.jpg","height":899,"iso_639_1":null,"vote_average":0,"vote_count":0,"width":1600},{"aspect_ratio":1.77777777777778,"file_path":"/rkLNl4UKam9GVwT9pTxsjccDgil.jpg","height":900,"iso_639_1":null,"vote_average":0,"vote_count":0,"width":1600},{"aspect_ratio":1.77725118483412,"file_path":"/qkcHBX99LZI5WJIJba0cMtHQKR9.jpg","height":1688,"iso_639_1":null,"vote_average":0,"vote_count":0,"width":3000},{"aspect_ratio":1.7797552836485,"file_path":"/hzWwhU0sc1tPBYXOoDO9pMOSDAb.jpg","height":899,"iso_639_1":null,"vote_average":0,"vote_count":0,"width":1600},{"aspect_ratio":1.77777777777778,"file_path":"/uOZCTh3GkZKdmstM4uK1aWFuz5b.jpg","height":1080,"iso_639_1":null,"vote_average":0,"vote_count":0,"width":1920},{"aspect_ratio":1.77777777777778,"file_path":"/k5yvySn82VcVwrxWdSGsphqxLYk.jpg","height":1152,"iso_639_1":null,"vote_average":0,"vote_count":0,"width":2048},{"aspect_ratio":1.77777777777778,"file_path":"/tD27YzFnmqLh5yLhk7vbgD5LmJ4.jpg","height":2160,"iso_639_1":null,"vote_average":0,"vote_count":0,"width":3840}],"posters":[{"aspect_ratio":0.666666666666667,"file_path":"/z6BP8yLwck8mN9dtdYKkZ4XGa3D.jpg","height":1500,"iso_639_1":"en","vote_average":5.52238805970149,"vote_count":4,"width":1000},{"aspect_ratio":0.666666666666667,"file_path":"/wFK9Bpmpc6lDcHY8dlbMpMqtmpE.jpg","height":2100,"iso_639_1":"fr","vote_average":5.3125,"vote_count":1,"width":1400},{"aspect_ratio":0.7001953125,"file_path":"/gRmVMlTw8GXmQeQ106RaQuWYaIe.jpg","height":2048,"iso_639_1":"el","vote_average":5.3125,"vote_count":1,"width":1434},{"aspect_ratio":0.666666666666667,"file_path":"/Fyvx5EmHYiACHoY0TTynlhrh07.jpg","height":1500,"iso_639_1":"pt","vote_average":5.3125,"vote_count":1,"width":1000},{"aspect_ratio":0.666666666666667,"file_path":"/zn3mchTeqXrSCJBpHsbS68HozWZ.jpg","height":1500,"iso_639_1":"en","vote_average":5.25230987917555,"vote_count":4,"width":1000},{"aspect_ratio":0.681176470588235,"file_path":"/yN3BVHuveFrMtLzf8N22svIurC8.jpg","height":850,"iso_639_1":"pt","vote_average":5.17113095238095,"vote_count":1,"width":579},{"aspect_ratio":0.674666666666667,"file_path":"/cxyPPstlfrLug3fEXEDVp1EJrzY.jpg","height":750,"iso_639_1":"en","vote_average":5.17113095238095,"vote_count":1,"width":506},{"aspect_ratio":0.666666666666667,"file_path":"/83TRGfWZyYtcuAy7BU0wWnkJ6zJ.jpg","height":1500,"iso_639_1":"en","vote_average":5.11727078891258,"vote_count":4,"width":1000},{"aspect_ratio":0.666666666666667,"file_path":"/xiI3WhLnlHPYbTDCcIjsDTF3BdJ.jpg","height":1500,"iso_639_1":"en","vote_average":5.10622710622711,"vote_count":2,"width":1000},{"aspect_ratio":0.674,"file_path":"/p9n4FMjTlQJcgA4uLdpSZ7a8uUJ.jpg","height":1000,"iso_639_1":"en","vote_average":5.10622710622711,"vote_count":2,"width":674},{"aspect_ratio":0.666666666666667,"file_path":"/jKtQlPQImHO2gj2bK1kfocJbzH1.jpg","height":3000,"iso_639_1":"de","vote_average":0,"vote_count":0,"width":2000},{"aspect_ratio":0.666666666666667,"file_path":"/uZrD4BZ1oj2nIZ9Zc7i8Gm7Tkx7.jpg","height":1650,"iso_639_1":"ko","vote_average":0,"vote_count":0,"width":1100},{"aspect_ratio":0.697883597883598,"file_path":"/ebnDmIPYJDfBBXtS0mGpcmy866e.jpg","height":1890,"iso_639_1":"ko","vote_average":0,"vote_count":0,"width":1319},{"aspect_ratio":0.666666666666667,"file_path":"/oDQu7lUKucQqAevIf1u3SueJneF.jpg","height":1500,"iso_639_1":"en","vote_average":0,"vote_count":0,"width":1000},{"aspect_ratio":0.75,"file_path":"/kLNX9SVrPxXGTCgzNGP3jgWqwqF.jpg","height":1600,"iso_639_1":"fr","vote_average":0,"vote_count":0,"width":1200},{"aspect_ratio":0.693421052631579,"file_path":"/b8TAtjDThZ9wm8u4NIqtbZkqS3i.jpg","height":760,"iso_639_1":"es","vote_average":0,"vote_count":0,"width":527},{"aspect_ratio":0.666666666666667,"file_path":"/2hzKuvvdnafmZepRdBnStTcYKDw.jpg","height":1500,"iso_639_1":"hu","vote_average":0,"vote_count":0,"width":1000},{"aspect_ratio":0.666666666666667,"file_path":"/lijsAvJcDFSXeSLOiRCUb96rweq.jpg","height":3000,"iso_639_1":null,"vote_average":0,"vote_count":0,"width":2000},{"aspect_ratio":0.666666666666667,"file_path":"/jFCXr2pRSVW5NAgySa7syMSSqfP.jpg","height":3000,"iso_639_1":null,"vote_average":0,"vote_count":0,"width":2000},{"aspect_ratio":0.666666666666667,"file_path":"/uGBT2xPtDLwkus5wxwAcRm0l5gP.jpg","height":900,"iso_639_1":"uk","vote_average":0,"vote_count":0,"width":600},{"aspect_ratio":0.7001953125,"file_path":"/q3AFwcqhdFcpt55vPguujKDshBC.jpg","height":2048,"iso_639_1":"it","vote_average":0,"vote_count":0,"width":1434},{"aspect_ratio":0.666666666666667,"file_path":"/gnxqzxrm4KdSfnlxNa7VTUnrWEZ.jpg","height":1500,"iso_639_1":"he","vote_average":0,"vote_count":0,"width":1000}]} // eslint-disable-line
      })
    }, 1500)

    setTimeout(() => {
      this.setState({
        credits: {"id":333484,"cast":[{"cast_id":4,"character":"Sam Chisolm","credit_id":"55593382c3a368776c008f73","id":5292,"name":"Denzel Washington","order":0,"profile_path":"/t9arcZbg1nLt8GZt2SkWm227YoK.jpg"},{"cast_id":0,"character":"Joshua Farraday","credit_id":"555933649251417578000b31","id":73457,"name":"Chris Pratt","order":1,"profile_path":"/n4DD1AYU7WEMNPLga1TxqnHivn1.jpg"},{"cast_id":5,"character":"Goodnight Robicheaux","credit_id":"5559338d92514178520001a5","id":569,"name":"Ethan Hawke","order":2,"profile_path":"/kcby6VYk6Gb0036nUyh8chY5ZAJ.jpg"},{"cast_id":1,"character":"Jack Horne","credit_id":"5559336cc3a368777e0094c4","id":7132,"name":"Vincent D'Onofrio","order":3,"profile_path":"/lUEn7f7xCLuT1kRCHoxMTRnYKXW.jpg"},{"cast_id":8,"character":"Billy Rocks","credit_id":"555933b89251412afe002cda","id":25002,"name":"Lee Byung-hun","order":4,"profile_path":"/snuA1bKjeh4SKUmF0sNqip1zVpJ.jpg"},{"cast_id":21,"character":"Vasquez","credit_id":"5763908ec3a36860190002f0","id":1168097,"name":"Manuel Garcia-Rulfo","order":5,"profile_path":"/ohtV4uA906RgEZoFacqLKfJupHc.jpg"},{"cast_id":22,"character":"Red Harvest","credit_id":"576390a7925141246b0004dd","id":1584347,"name":"Martin Sensmeier","order":6,"profile_path":"/jQtxj9mm5MHBf5Lyta5DPFSzC9q.jpg"},{"cast_id":23,"character":"Bartholomew Bogue","credit_id":"576390cac3a368776e000059","id":133,"name":"Peter Sarsgaard","order":7,"profile_path":"/dGoUlDEJumPY0CFlT7eM6KVdLUu.jpg"},{"cast_id":7,"character":"Emma Cullen","credit_id":"555933a39251412afe002cd5","id":58754,"name":"Haley Bennett","order":8,"profile_path":"/wZdkIHRArHSSMWslGNqMxytmAe6.jpg"},{"cast_id":3,"character":"Matthew Cullen","credit_id":"5559337bc3a368778200a890","id":66743,"name":"Matt Bomer","order":9,"profile_path":"/aSW1IvDtHnsDOovid4U6fl4EU8f.jpg"},{"cast_id":6,"character":"Teddy","credit_id":"55593395c3a3682f610001b7","id":56680,"name":"Luke Grimes","order":10,"profile_path":"/exWEhmQhrUXl4zQ1lnBiSMUvOYF.jpg"},{"cast_id":95,"character":"Denali","credit_id":"57ed60429251416dfa001182","id":154778,"name":"Jonathan Joss","order":11,"profile_path":"/1cjHSQcnMI8Zeyn7wAbDrI0D1m.jpg"},{"cast_id":19,"character":"McCann","credit_id":"56c651c0c3a3680d41004015","id":55086,"name":"Cam Gigandet","order":12,"profile_path":"/bJC9iA16bMomtoOdNSgMnH7pdth.jpg"},{"cast_id":92,"character":"Fanning","credit_id":"57920318c3a368577d0011a6","id":144160,"name":"Sean Bridgers","order":13,"profile_path":"/jJwTRA2gHw9F4JWGXyqIicV24Cy.jpg"},{"cast_id":94,"character":"Cooper","credit_id":"57920451c3a368596100144b","id":85419,"name":"Dylan Kenin","order":14,"profile_path":"/1lVPWxGyXDsYhkXGHybeyN5Eyd8.jpg"},{"cast_id":10,"character":"Monday Durant","credit_id":"555933d5c3a3687779008cd9","id":1181263,"name":"Kevin Wayne","order":15,"profile_path":"/3gZc6YmjgbUPv7EYWJyqcBJx9Lh.jpg"},{"cast_id":14,"character":"","credit_id":"55890adcc3a368054500258f","id":1158068,"name":"Carrie Lazar","order":16,"profile_path":"/jAWDOiLV1qJKINQcm9HF80s4Pmw.jpg"},{"cast_id":15,"character":"Turner","credit_id":"55a21c8bc3a3681ce7002f11","id":159300,"name":"David Kallaway","order":17,"profile_path":"/ezulXDH212W2KhWqQj6v3Q38ZQl.jpg"},{"cast_id":91,"character":"","credit_id":"579202f5c3a36857800010cc","id":980,"name":"Vinnie Jones","order":18,"profile_path":"/1QQea9t0JkRVVVbgVtpGAQuf0x5.jpg"},{"cast_id":93,"character":"Clara","credit_id":"57920415c3a3685925000fe0","id":965980,"name":"Alix Angelis","order":19,"profile_path":"/lv6izb57UCeuWiF9xCw9lClFCDo.jpg"},{"cast_id":96,"character":"Josiah","credit_id":"57ed605b9251416dfa00118f","id":62784,"name":"Billy Slaughter","order":20,"profile_path":"/5YykEE15cNzgexL7d5ewAu5M8XN.jpg"}],"crew":[{"credit_id":"5792022c9251411eb2000fa9","department":"Costume & Make-Up","id":1402708,"job":"Key Hair Stylist","name":"Donna Spahn","profile_path":null},{"credit_id":"555934679251415576000332","department":"Directing","id":20907,"job":"Director","name":"Antoine Fuqua","profile_path":"/igZG1y2u8WFUGuMFbvNU4jEmN2P.jpg"},{"credit_id":"555934749251412afe002cfe","department":"Writing","id":54040,"job":"Screenplay","name":"John Lee Hancock","profile_path":"/1eCqzsuFp0xKGeTEErXyEifN82U.jpg"},{"credit_id":"5559347ec3a3682f610001ff","department":"Writing","id":1281190,"job":"Screenplay","name":"Nic Pizzolatto","profile_path":"/orVfktsRnwAE1rBXJRefO8pX2b8.jpg"},{"credit_id":"56760071c3a368167c00415e","department":"Lighting","id":1418403,"job":"Rigging Gaffer","name":"Glenn E. Moran","profile_path":null},{"credit_id":"5676008cc3a368167c004164","department":"Lighting","id":1551366,"job":"Lighting Technician","name":"Joey Moran","profile_path":null},{"credit_id":"570bc549c3a3680ee100387c","department":"Production","id":1561731,"job":"Unit Production Manager","name":"Wendy Williams","profile_path":null},{"credit_id":"5791fa99c3a36858df000a3b","department":"Art","id":23972,"job":"Supervising Art Director","name":"Leslie McDonald","profile_path":null},{"credit_id":"5791fa88c3a3683014006849","department":"Art","id":1145972,"job":"Set Decoration","name":"Merissa Lombardo","profile_path":null},{"credit_id":"5791fa5ec3a3683014006833","department":"Art","id":1412450,"job":"Art Department Coordinator","name":"Jarrette Moats","profile_path":null},{"credit_id":"5791fa499251411e67000abf","department":"Art","id":1571476,"job":"Art Department Coordinator","name":"Vicki M. McWilliams","profile_path":null},{"credit_id":"5791fa2dc3a36858df000a00","department":"Art","id":1442117,"job":"Art Direction","name":"Sean Ryan Jennings","profile_path":null},{"credit_id":"5791f9ef9251411eb2000a0f","department":"Production","id":60665,"job":"Casting","name":"Jo Edna Boldin","profile_path":null},{"credit_id":"5791fa1cc3a3683014006811","department":"Art","id":12131,"job":"Production Design","name":"Derek R. Hill","profile_path":"/bNW0bkugEjK2Hu9Kic5HgVL75LT.jpg"},{"credit_id":"5791fa0cc3a3685925000949","department":"Production","id":5914,"job":"Casting","name":"Mary Vernieu","profile_path":"/rluDG0SLCvh3rVkMMp44C31iHIN.jpg"},{"credit_id":"5791f9fec3a368577d000ad0","department":"Production","id":1024910,"job":"Casting","name":"Lindsay Graham","profile_path":null},{"credit_id":"5791f99ac3a3685961000b7c","department":"Production","id":51612,"job":"Producer","name":"Todd Black","profile_path":null},{"credit_id":"5791f987c3a36858df00099d","department":"Production","id":4504,"job":"Producer","name":"Roger Birnbaum","profile_path":null},{"credit_id":"5791f9b59251411f22000923","department":"Sound","id":1654408,"job":"Original Music Composer","name":"Simon Franglen","profile_path":null},{"credit_id":"5791f961c3a3685889000937","department":"Writing","id":22814,"job":"Screenplay","name":"Richard Wenk","profile_path":"/gRwUXjySs6KjdQxJSv8U8Ish0dJ.jpg"},{"credit_id":"5786d24dc3a3682f7400072d","department":"Sound","id":1729,"job":"Original Music Composer","name":"James Horner","profile_path":"/iEiRtIdTjlwxrh1dF27RFbLl9LD.jpg"},{"credit_id":"5786d36dc3a3685338000185","department":"Camera","id":18265,"job":"Director of Photography","name":"Mauro Fiore","profile_path":null},{"credit_id":"5786d38bc3a3682f6e000870","department":"Editing","id":58871,"job":"Editor","name":"John Refoua","profile_path":null},{"credit_id":"5791fac1c3a3685780000adf","department":"Costume & Make-Up","id":15573,"job":"Costume Design","name":"Sharen Davis","profile_path":null},{"credit_id":"5791faea9251411f71000a40","department":"Production","id":1333932,"job":"Casting","name":"Elizabeth Coulon","profile_path":null},{"credit_id":"5791fafcc3a36858df000a71","department":"Production","id":1532605,"job":"Casting Associate","name":"Marie A. Kohl","profile_path":null},{"credit_id":"5791fb0c9251411f71000a4d","department":"Production","id":1608766,"job":"Casting Associate","name":"Marisol Roncali","profile_path":null},{"credit_id":"5791fbc49251411ff8000b0c","department":"Costume & Make-Up","id":1560976,"job":"Costume Supervisor","name":"Bill Edwards","profile_path":null},{"credit_id":"5791fbe19251411eb2000b0a","department":"Crew","id":1558101,"job":"Armorer","name":"Morey Butler","profile_path":null},{"credit_id":"5791fbf9c3a368584c000b5d","department":"Directing","id":1403421,"job":"Script Supervisor","name":"Dawn Gilliam","profile_path":"/yCweeI63alnBOX5zZtBBjosmQM0.jpg"},{"credit_id":"5791fc169251411f71000ad1","department":"Directing","id":1399892,"job":"Script Supervisor","name":"Lisa McNeil","profile_path":null},{"credit_id":"5791fc309251411f9e000ab1","department":"Directing","id":1654416,"job":"Script Coordinator","name":"Cory C. Myler","profile_path":null},{"credit_id":"5791fd159251411fcb000be6","department":"Costume & Make-Up","id":1573013,"job":"Set Costumer","name":"Rendell Bryce","profile_path":null},{"credit_id":"5791fd2a9251411e67000c51","department":"Costume & Make-Up","id":1654420,"job":"Set Costumer","name":"Ryan Henderson Jr.","profile_path":null},{"credit_id":"5791fd3e9251411f71000b87","department":"Costume & Make-Up","id":1401814,"job":"Set Costumer","name":"Alejandro M. Hernandez","profile_path":null},{"credit_id":"5791fd52c3a3685889000b5d","department":"Costume & Make-Up","id":1585899,"job":"Set Costumer","name":"Ric Spencer","profile_path":null},{"credit_id":"5791fd62c3a368577d000cc1","department":"Costume & Make-Up","id":1368882,"job":"Set Costumer","name":"Tricia Yoo","profile_path":null},{"credit_id":"5791fda09251411f71000bd3","department":"Camera","id":1408356,"job":"Camera Operator","name":"David Richert","profile_path":null},{"credit_id":"5791fdb8c3a3685961000e3f","department":"Camera","id":131198,"job":"Camera Operator","name":"Brown Cooper","profile_path":null},{"credit_id":"5791fdcbc3a3685889000bb8","department":"Camera","id":1084753,"job":"Camera Operator","name":"Jerry M. Jacob","profile_path":null},{"credit_id":"5791fdeac3a368584c000ca9","department":"Camera","id":1437305,"job":"Camera Operator","name":"Michael Applebaum","profile_path":null},{"credit_id":"5791fe269251411ff8000ca6","department":"Crew","id":1411846,"job":"Second Unit Cinematographer","name":"Lukasz Jogalla","profile_path":null},{"credit_id":"5791fe6cc3a368584c000d30","department":"Camera","id":1377502,"job":"Still Photographer","name":"Sam Emerson","profile_path":null},{"credit_id":"5791fe82c3a3685889000c89","department":"Camera","id":1419105,"job":"Still Photographer","name":"Scott Garfield","profile_path":null},{"credit_id":"5791fee1c3a368577d000e34","department":"Lighting","id":1654424,"job":"Gaffer","name":"Michael Kelly","profile_path":null},{"credit_id":"5791fefe9251411ff8000d67","department":"Camera","id":1548880,"job":"First Assistant Camera","name":"Ray Milazzo","profile_path":null},{"credit_id":"5791ff0ec3a3685961000f9a","department":"Camera","id":1654425,"job":"First Assistant Camera","name":"Larry Nielsen","profile_path":null},{"credit_id":"5791ff3c9251411eb2000d7d","department":"Camera","id":1552778,"job":"First Assistant Camera","name":"Chris Fisher","profile_path":null},{"credit_id":"5791ffb19251411fcb000e17","department":"Crew","id":1419103,"job":"CG Supervisor","name":"Don Libby","profile_path":null},{"credit_id":"5791ffd5c3a36858df000dfd","department":"Visual Effects","id":1429245,"job":"Special Effects Supervisor","name":"Yves De Bono","profile_path":null},{"credit_id":"5791fffdc3a3683014006b89","department":"Crew","id":1442117,"job":"Visual Effects Art Director","name":"Sean Ryan Jennings","profile_path":null},{"credit_id":"57920010c3a3685961001072","department":"Visual Effects","id":1654427,"job":"Visual Effects Coordinator","name":"Stella-Madeline Shalita","profile_path":null},{"credit_id":"579200229251411fcb000e76","department":"Visual Effects","id":1654429,"job":"Visual Effects Coordinator","name":"Jennifer Wang","profile_path":null},{"credit_id":"579200369251411f22000d60","department":"Visual Effects","id":1580882,"job":"Visual Effects Coordinator","name":"Magdalena Strzelczyk","profile_path":null},{"credit_id":"57920049c3a3683014006bb4","department":"Crew","id":1458105,"job":"Visual Effects Editor","name":"Adam Avery","profile_path":null},{"credit_id":"5792005dc3a36859610010c0","department":"Crew","id":1229789,"job":"Visual Effects Editor","name":"Gian Ganziano","profile_path":null},{"credit_id":"579200749251411eb2000e64","department":"Visual Effects","id":1419101,"job":"Visual Effects Producer","name":"Brian Drewes","profile_path":null},{"credit_id":"5792008ec3a36859610010ef","department":"Visual Effects","id":1425387,"job":"Visual Effects Producer","name":"Scott Shapiro","profile_path":null},{"credit_id":"579200a09251411f0d000e28","department":"Visual Effects","id":1580892,"job":"Visual Effects Producer","name":"Benedikt Laubenthal","profile_path":null},{"credit_id":"579200b2c3a3685925000d55","department":"Visual Effects","id":1419102,"job":"Visual Effects Supervisor","name":"Sean Devereaux","profile_path":null},{"credit_id":"579200c4c3a3685780000f10","department":"Visual Effects","id":1580895,"job":"Visual Effects Supervisor","name":"John P. Nugent","profile_path":null},{"credit_id":"579200fcc3a3683014006c40","department":"Editing","id":1415007,"job":"Dialogue Editor","name":"Russell Farmarco","profile_path":null},{"credit_id":"5792011ec3a3685889000e68","department":"Sound","id":1367493,"job":"Foley","name":"John T. Cucci","profile_path":null},{"credit_id":"579201369251411e67000fca","department":"Sound","id":1338372,"job":"Foley","name":"Dan O'Connell","profile_path":null},{"credit_id":"5792014fc3a368596100119c","department":"Sound","id":1412699,"job":"Sound Designer","name":"David Esparza","profile_path":null},{"credit_id":"579201749251411f71000e96","department":"Sound","id":1393444,"job":"Sound Effects Editor","name":"Ryan Collins","profile_path":null},{"credit_id":"57920193c3a368577d00105e","department":"Sound","id":1378227,"job":"Sound Re-Recording Mixer","name":"Daniel J. Leahy","profile_path":null},{"credit_id":"579201a79251411eb2000f22","department":"Sound","id":1378228,"job":"Sound Re-Recording Mixer","name":"Steve Pederson","profile_path":null},{"credit_id":"579201c39251411eb2000f3c","department":"Sound","id":1412703,"job":"Supervising Sound Editor","name":"Mandell Winter","profile_path":null},{"credit_id":"579202049251411eb2000f82","department":"Costume & Make-Up","id":32282,"job":"Hair Department Head","name":"Mary L. Mastro","profile_path":null},{"credit_id":"57920248c3a368577d0010f5","department":"Costume & Make-Up","id":1419091,"job":"Makeup Department Head","name":"Liz Bernstrom","profile_path":null},{"credit_id":"579202599251411f22000ee0","department":"Costume & Make-Up","id":1636670,"job":"Makeup Artist","name":"Carla Brenholtz","profile_path":null},{"credit_id":"579202779251411e670010f4","department":"Crew","id":23285,"job":"Stunt Coordinator","name":"Jeffrey J. Dashnaw","profile_path":null}]} // eslint-disable-line
      })
    }, 2000)

  }
  render() {
    const isLoading = this.state.movie === null || this.state.images === null || this.state.credits === null

    if (isLoading) {
      return <div className="me-loading">
        <i className="fa fa-refresh fa-spin" aria-hidden="true"></i>
      </div>
    }
    else {
      const m = this.state.movie
      const i = this.state.images
      const c = this.state.credits

      const previewBackdrops = i.backdrops.splice(1)

      const average = Math.round(m.vote_average * 10) / 10

      // Put in a columns/rows format
      const previewBackdropsFormatted = []
      for (let i = 0; i < previewBackdrops.length; i += 2) {
        previewBackdropsFormatted.push([previewBackdrops[i], previewBackdrops[i+1]])
      }

      return <div className="me-movie-detail">
        <div className="me-movie-detail__main-left">
          <div className="me-movie-detail__main-left__fixed-wrapper">
            <div className="me-movie-detail__main-left__main-poster" style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w600${i.backdrops[0].file_path})`
            }} />
            <div className="me-movie-detail__main-left__main-poster--border"/>
            <div className="me-movie-detail__main-left__details">
              <div className="me-movie-detail__main-left__buttons">
                <button className="me-button me-button-flex me-button-primary">
                  Add to Watchlist
                </button>
                <button className="me-button me-button-flex me-button-regular">
                  Watch trailer
                </button>
              </div>
            </div>
          </div>
          <div className="me-movie-detail__main-left__scrollable-wrapper">
            <div className="me-movie-detail__main-left__backdrops">
              {previewBackdropsFormatted.map((bD, i) => {
                return <div key={i} className="me-movie-detail__main-left__backdrop__row">
                  <div className={classnames('me-movie-detail__main-left__backdrop', {
                    'me-movie-detail__main-left__backdrop-wide': i % 2 === 0,
                    'me-movie-detail__main-left__backdrop-narrow': i % 2 === 1
                  })} style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w600${bD[0].file_path})`
                  }} />

                  {bD[1] && <div className={classnames('me-movie-detail__main-left__backdrop', {
                    'me-movie-detail__main-left__backdrop-wide': i % 2 === 1,
                    'me-movie-detail__main-left__backdrop-narrow': i % 2 === 0
                  })}  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w600${bD[1].file_path})`
                  }} />}
                </div>
              })}
            </div>
          </div>
        </div>
        <div className="me-movie-detail__main-right">
          <div className="me-movie-detail__main-right__info">
            <a className="me-back-link" onClick={browserHistory.goBack}><i className="fa fa-chevron-circle-left" aria-hidden="true"></i> Back to list</a>
            <h1 className="me-movie-detail__main-right__info__title">{m.title} <span className="me-movie-detail__main-right__info__year">({m.release_date.split('-')[0]})</span></h1>
            <div className="me-movie-detail__main-right__info__desc">
              {m.overview}
            </div>
            <div className="me-movie-detail__main-right__info__scoretable">
              <div className="score">
                <div className="circle-wrapper">
                  <Circle percent={average * 10}
                    trailWidth="10"
                    trailColor="#292929"
                    strokeWidth="10"
                    strokeColor="#fae906"
                    strokeLinecap="square"/>
                  <div className="value"><span>{average}</span></div>
                </div>
              </div>
              <table>
                <tbody>
                  <tr>
                    <td>Genre</td>
                    <td className="detail">{m.genres.map(g => g.name).join(', ')}</td>
                  </tr>
                  <tr>
                    <td>Release date</td>
                    <td className="detail">{m.release_date}</td>
                  </tr>
                  <tr>
                    <td>Duration</td>
                    <td className="detail">{m.runtime} min</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="me-movie-detail__main-right__crew">
            <table>
              <tbody>
                {c.cast.map((c, i) => {
                  return <tr key={i}>
                    <td>
                      <div className="photo" style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w90${c.profile_path})`
                      }}></div>
                    </td>
                    <td className="info">{c.name}</td>
                    <td className="info">As...</td>
                    <td className="detail">{c.character}</td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    }
  }
}
