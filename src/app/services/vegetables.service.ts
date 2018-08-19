import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VegetablesService {


private vegetablesList:Vegetable[] =[
	{
		name: "Corn",
		abstract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae.",
		img: "assets/img/vegetable-03.png",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae, ad et illum eos officia, provident alias veniam harum aliquam ipsa ducimus voluptate iure nobis odio! Velit asperiores saepe recusandae reiciendis beatae, facilis, at.",
		status: true
	},
	{
		name: "Cucumber",
		abstract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae.",
		img: "assets/img/vegetable-07.png",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae, ad et illum eos officia, provident alias veniam harum aliquam ipsa ducimus voluptate iure nobis odio! Velit asperiores saepe recusandae reiciendis beatae, facilis, at.",
		status: true
	},
	{
		name: "Carrot",
		abstract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae.",
		img: "assets/img/vegetable-08.png",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae, ad et illum eos officia, provident alias veniam harum aliquam ipsa ducimus voluptate iure nobis odio! Velit asperiores saepe recusandae reiciendis beatae, facilis, at.",
		status: true
	},
	{
		name: "Eggplant",
		abstract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae.",
		img: "assets/img/vegetable-10.png",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae, ad et illum eos officia, provident alias veniam harum aliquam ipsa ducimus voluptate iure nobis odio! Velit asperiores saepe recusandae reiciendis beatae, facilis, at.",
		status: true
	},
	{
		name: "Red capsicum",
		abstract: "Cconsectetur adipisicing elit. Magnam officiis ex molestias.",
		img: "assets/img/vegetable-12.png",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae, ad et illum eos officia, provident alias veniam harum aliquam ipsa ducimus voluptate iure nobis odio! Velit asperiores saepe recusandae reiciendis beatae, facilis, at.",
		status: true
	},
	{
		name: "Lettuce",
		abstract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae.",
		img: "assets/img/vegetable-14.png",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae, ad et illum eos officia, provident alias veniam harum aliquam ipsa ducimus voluptate iure nobis odio! Velit asperiores saepe recusandae reiciendis beatae, facilis, at.",
		status: true
	},
	{
		name: "Mushroom",
		abstract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae.",
		img: "assets/img/vegetable-17.png",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae, ad et illum eos officia, provident alias veniam harum aliquam ipsa ducimus voluptate iure nobis odio! Velit asperiores saepe recusandae reiciendis beatae, facilis, at.",
		status: true
	},
	{
		name: "Tomato",
		abstract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae.",
		img: "assets/img/vegetable-18.png",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae, ad et illum eos officia, provident alias veniam harum aliquam ipsa ducimus voluptate iure nobis odio! Velit asperiores saepe recusandae reiciendis beatae, facilis, at.",
		status: true
	},
	{
		name: "Potato",
		abstract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae.",
		img: "assets/img/vegetable-19.png",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae, ad et illum eos officia, provident alias veniam harum aliquam ipsa ducimus voluptate iure nobis odio! Velit asperiores saepe recusandae reiciendis beatae, facilis, at.",
		status: true
	},
	{
		name: "Chilli",
		abstract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae.",
		img: "assets/img/vegetable-22.png",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae, ad et illum eos officia, provident alias veniam harum aliquam ipsa ducimus voluptate iure nobis odio! Velit asperiores saepe recusandae reiciendis beatae, facilis, at.",
		status: true
	},
	{
		name: "Garlic",
		abstract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae.",
		img: "assets/img/vegetable-23.png",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae, ad et illum eos officia, provident alias veniam harum aliquam ipsa ducimus voluptate iure nobis odio! Velit asperiores saepe recusandae reiciendis beatae, facilis, at.",
		status: true
	},
	{
		name: "Onion",
		abstract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae.",
		img: "assets/img/vegetable-25.png",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis ex molestias perferendis rem quasi vitae, ad et illum eos officia, provident alias veniam harum aliquam ipsa ducimus voluptate iure nobis odio! Velit asperiores saepe recusandae reiciendis beatae, facilis, at.",
		status: true
	}
	
	];
  constructor() { }

  getVegetables(){
  	return this.vegetablesList;
  }

  getVegetable(id){
  	return this.vegetablesList[id];
  }
  
}


export interface Vegetable {
	name: string,
	abstract: string,
	img: string,
	description,
	status: boolean
}