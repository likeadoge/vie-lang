<template>
    <div class="num" >
        <div class="title" :title="`${type.kind}[${type.range[0]},${type.range[1]}]`">
            {{type.name}}
        </div>
        <div  class="content">{{content}}</div>
    </div>
</template>

<script>
import {Number,Variable} from '@/lang/Expr' 


export default {
    props:{value:[Number,Variable]},
    computed:{
        type(){
            if(this.value instanceof Number){
                return this.value.type
            }else if(this.value instanceof Variable){
                return this.value.type
            }else{
                throw new Error('wrong input')
            }
        },
        content(){
            if(this.value instanceof Number){
                return this.value.value
            }else if(this.value instanceof Variable){
                return this.value.name
            }else{
                throw new Error('wrong input')
            }
        }
    }
}
</script>

<style  scoped>

.num{
    width:120px;background: #ccc;
    border-radius: 3px;padding: 2px 0;
}

.num .title{
    /* height: 24px ;line-height: 24px; */
    margin:0 4px;
    border-bottom: 1px solid #fff;
}


.num .content{
    /* height: 24px ;line-height: 24px; */
}



</style>