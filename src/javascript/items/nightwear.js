if(typeof window.items == "undefined"){
    window.items = {};
}

$.extend(true, window.items, {
    itemMasters:{
        //Nightwear
        pyjamas:{
            itemType:"nightwear",
            clothingSlot:"nightwear",
            name: "Comfy Pyjamas",
            itemMaster: "pyjamas",
            daring:0,
            disabled:false,
            hasWorn:false,
            isMale:true,
            isFemale:false,
            tags:{
                school:true,
                plain:true,
            }
        },
        nightie:{
            itemType:"nightwear",
            clothingSlot:"nightwear",
            name: "Nighties",
            itemMaster: "nightie",
            daring:5,
            disabled:false,
            hasWorn:false,
            isMale:true,
            isFemale:false,
            tags:{
                school:true,
                plain:true,
            }
        },
    },
    itemChildren:{
         //pajamas
         pajamas00:{
            masterItem:"pyjamas",
            variant:"male_pyjamas_00",
            name:"Grey Tartan Pyjamas",
            price:20,
            daring:0,
            disabled:false,
            isMale:true,
            isFemale:false,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                grey:true,
                nightwear:true,
                plain:true,
            }
        },
        pajamas01:{
            masterItem:"pyjamas",
            variant:"male_pyjamas_01",
            name:"Black Pyjamas",
            price:20,
            daring:0,
            disabled:false,
            isMale:true,
            isFemale:false,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                black:true,
                nightwear:true,
                plain:true,
            }
        },

        //nightie
        nightie00:{
            masterItem:"nightie",
            variant:"nightie_00",
            name:"Black Satin Teddie",
            price:65,
            daring:5,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                black:true,
                nightwear:true,
                plain:true,
            }
        },
        nightie01:{
            masterItem:"nightie",
            variant:"nightie_01",
            name:"Grey Sheer Satin Nightie",
            price:65,
            daring:5,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                grey:true,
                nightwear:true,
                plain:true,
            }
        },
        nightie02:{
            masterItem:"nightie",
            variant:"nightie_02",
            name:"Black Frilly Nightie",
            price:65,
            daring:5,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                black:true,
                nightwear:true,
                plain:true,
            }
        },
        nightie03:{
            masterItem:"nightie",
            variant:"nightie_03",
            name:"Pink Satin Teddie",
            price:65,
            daring:5,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                pink:true,
                nightwear:true,
                plain:true,
            }
        },
        nightie04:{
            masterItem:"nightie",
            variant:"nightie_04",
            name:"Yellow Satin Teddie",
            price:65,
            daring:5,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                yellow:true,
                nightwear:true,
                plain:true,
            }
        },
        nightie05:{
            masterItem:"nightie",
            variant:"nightie_05",
            name:"Black Satin Nightie with Fur",
            price:65,
            daring:5,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                black:true,
                nightwear:true,
                plain:true,
            }
        },
    }
});