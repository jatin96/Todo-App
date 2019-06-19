import axios from 'axios'

class HelloWorldService {
    executeHelloWorldService() {
        console.log('execute service')
        return axios.get('http://localhost:8080/hello-world')
    }

    executeHelloWorldBeanService() {
        console.log('execute service')
        return axios.get('http://localhost:8080/hello-world-bean')
    }
    executeHelloWorldBeanPathVariableService(name) {
        console.log('execute service')
        return axios.get(`http://localhost:8080/hello-world-bean/${name}`)
    }
}

export default new HelloWorldService();