<template>
    <svg :width="width" :height="height" :alt="iconSelect">
        <use  :xlink:href="'./assets/ClassIcons.svg#' + iconSelect" s></use>
    </svg>  
</template>
<script>
     export default {
        props: {
            iconSelect: {
                type: String,
            } ,
            width: {
                type: [Number, String],
            },
            height: {
                type: [Number, String],
                default: 18
            },   
        }
    }
</script>