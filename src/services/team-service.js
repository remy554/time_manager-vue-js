/* Service responsible for getting teams */
import axios from 'axios'
import authHeader from './authentication-headers'

const API_URL = 'http://localhost:4000/api/teams/'

class TeamService {
  getUserTeam () {
    return axios
      .get(API_URL + JSON.parse(localStorage.getItem('user')).team.id, null, { headers: authHeader() })
      .then(response => {
        return response
      })
  }

  getAllTeams () {
    return axios
      .get(API_URL, null, { headers: authHeader() })
      .then(response => {
        return response
      })
  }

  createTeam (teamName) {
    console.log('team name in team service : ' + teamName)
    const jsonBody = {
      team: {
        name: teamName
      }
    }

    return axios
      .post(API_URL, jsonBody, { headers: authHeader() })
      .then(response => {
        return response
      })
  }
}

export default new TeamService()
