export const controller = {
    clicked() {
        try {
            fetch(this.api)
                .then(response => response.json())
                .then(data => {
                    this.random = data;
                    this.logger?.verbose(`The random number picked is:  ${data}`);
                }).catch(error => {
                    this.logger?.error('Error:', error);
                    this.random = '!';
                    this.error = 'Look\'s like the api is returning an error!';
            });
        } catch (error){
            this.logger?.error('Error:', error);
            this.random = '!';
        }
    }
}
