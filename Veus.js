new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        images: [],
        favourites:[],
        page: 1,
        error_message:null,
        limit: 3,
        pagination_count: 0, //default until we get a result with the 'Pagination-Count' header in the response
    },
    created(){

        axios.defaults.headers.common['x-api-key'] = "a43d61b5-70ed-4f20-bda8-065d920dd3d2" // adicionei Key da API

        this.getImages();
        this.getFavourites()
    } ,
    watch: {
        // if the user changes any of these values, then make a new request to the API
        page: function()
        {
            this.getFavourites();
        },
    },
    computed:{

        getNumPages: function()
        {
            return Math.floor(this.pagination_count / this.limit) | 0;
        }
    },
    methods:{

        async getImages()
        {
            try{

                let query_params = {
                    limit: this.limit
                }
                let response = await axios.get('https://api.thedogapi.com/v1/images/search', { params: query_params } )
                this.images = response.data

            }catch(err){
                console.log(err)
            }
        },



        async getFavourites()
        {
            try{

                let query_params = {
                    limit: this.limit,
                    order: 'DESC',
                    page:  this.page-1,
                }
                let response = await axios.get('https://api.thedogapi.com/v1/favourites', { params: query_params } )
                this.favourites = response.data
                this.pagination_count = response.headers['pagination-count'];
                this.clearError();
            }catch(err){
                console.log(err)
            }
        },
        async favouriteImage(image_id)
        {

            try{
                let post_body = {
                    image_id: image_id,
                    sub_id:"User-123"
                }

                let response = await axios.post('https://api.thedogapi.com/v1/favourites', post_body )
                this.page = 1;
                this.getFavourites()
            }catch(error){
                console.log(error)
                this.error_message = error.response.data.message
            }
        },
        async deleteFavouriteImage(favourite_id)//this is not the image id
        {

            try{
                let response = await axios.delete('https://api.thedogapi.com/v1/favourites/'+favourite_id )
                this.favourites = response.data

                this.page = 1;
                this.getFavourites()
            }catch(err){
                console.log(err)
            }
        },
        async clearError()
        {
            this.error_message = null
        }
    }
})