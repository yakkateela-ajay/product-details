import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'product-details';
  public modalRef!: BsModalRef;
  product:any = {};
  productList: any[] = [
    {
      images: [],
      productName: "Banana",
      productDescription: `A banana is an elongated, edible fruit – botanically a berry produced
        by several kinds of large herbaceous flowering plants in the genus Musa. In some countries,
        bananas used for cooking may be called "plantains", distinguishing them from dessert bananas.
          The fruit is variable in size, color, and firmness, but is usually elongated and curved,
          with soft flesh rich in starch covered with a rind, which may be green, yellow, red, purple,
            or brown when ripe. The fruits grow upward in clusters near the top of the plant. `,
      price: 120,
      quantity: 10
   },
   {
      images: ["data:image/jpeg;base64,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",
         "data:image/jpeg;base64,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",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-W8wENWVuEW380B4Zz_tbSb_1SmDf9G6Mw&usqp=CAU"],
      productName: "Apple",
      productDescription: `An apple is an edible fruit produced by an apple tree (Malus domestica). 
      Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus.
      The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today.
      Apples have been grown for thousands of years in Asia and Europe and were brought to North America
      by European colonists. Apples have religious and mythological significance in many cultures, including 
      Norse, Greek, and European Christian tradition.`,
      price: 100,
      quantity: 12
   },
   {
      images: [],
      productName: "tamarind",
      productDescription: `Tamarind (Tamarindus indica) is a leguminous tree bearing edible fruit that is probably
      indigenous to tropical Africa. The genus Tamarindus is monotypic, meaning that it contains only this species.
      It belongs to the family Fabaceae.The tamarind tree produces brown, pod-like fruits that contain a sweet, 
      tangy pulp, which is used in cuisines around the world. The pulp is also used in traditional medicine and
        as a metal polish.`,
      price: 20,
      quantity: 10
   },
   {
      images: [],
      productName: "mango",
      productDescription: `A mango is an edible stone fruit produced by the tropical tree Mangifera indica.
      It is believed to have originated between northwestern Myanmar, Bangladesh, and northeastern India.
      M. indica has been cultivated in South and Southeast Asia since ancient times resulting in two types
      of modern mango cultivars: the "Indian type" and the "Southeast Asian type".Other species in the genus
      Mangifera also produce edible fruits that are also called "mangoes", the majority of which are found 
      in the Malesian ecoregion.`,
      price: 120,
      quantity: 10
   },
   {
      images: [],
      productName: "coconut",
      productDescription: `The coconut tree (Cocos nucifera) is a member of the palm tree family (Arecaceae)
      and the only living species of the genus Cocos. The term "coconut" (or the archaic "cocoanut") can refer
      to the whole coconut palm, the seed, or the fruit, which botanically is a drupe, not a nut. The name comes
      from the old Portuguese word coco, meaning "head" or "skull", after the three indentations on the coconut 
      shell that resemble facial features. They are ubiquitous in coastal tropical regions and are a cultural icon
      of the tropics`,
      price: 50,
      quantity: 1
   },
   {
      images: [],
      productName: "water melon",
      productDescription: `Watermelon (Citrullus lanatus) is a flowering plant species of the Cucurbitaceae family 
      and the name of its edible fruit. A scrambling and trailing vine-like plant, it is a highly cultivated fruit
      worldwide, with more than 1,000 varieties.Watermelon is grown in favorable climates from tropical to temperate
      regions worldwide for its large edible fruit, which is a berry with a hard rind and no internal divisions, and 
      is botanically called a pepo. The sweet, juicy flesh is usually deep red to pink, with many black seeds,
      although seedless varieties exist. `,
      price: 120,
      quantity: 10
   },
   {
      images: [],
      productName: "pine apple",
      productDescription: `The pineapple(Ananas comosus) is a tropical plant with an edible fruit; it is the most
      economically significant plant in the family Bromeliaceae.[4] The pineapple is indigenous to South America,
      where it has been cultivated for many centuries. The introduction of the pineapple to Europe in the 17th
      century made it a significant cultural icon of luxury. Since the 1820s, pineapple has been commercially
      grown in greenhouses and many tropical plantations.`,
      price: 120,
      quantity: 10
   },
   {
      images: [],
      productName: "strawberry",
      productDescription: `The garden strawberry (or simply strawberry; Fragaria ananassa) is a widely grown 
      hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated
      worldwide for their fruit. The fruit is widely appreciated for its characteristic aroma, bright red 
      color, juicy texture, and sweetness. It is consumed in large quantities, either fresh or in such 
      prepared foods as jam, juice, pies, ice cream, milkshakes, and chocolates. Artificial strawberry
      flavorings and aromas are also widely used in products such as candy, soap, lip gloss, perfume,
      and many others.`,
      price: 120,
      quantity: 10
   },
   {
      images: [],
      productName: "kiwi",
      productDescription: `Kiwifruit (often shortened to kiwi in North American, British and continental 
      European English) or Chinese gooseberry is the edible berry of several species of woody vines in the
      genus Actinidia. The most common cultivar group of kiwifruit (Actinidia deliciosa 'Hayward') is oval.`,
      price: 120,
      quantity: 10
   },
   {
      images: [],
      productName: "grapes",
      productDescription: `A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering 
      plant genus Vitis. Grapes are a non-climacteric type of fruit, generally occurring in clusters.The cultivation
      of grapes began perhaps 8,000 years ago, and the fruit has been used as human food over history. Eaten fresh 
      or in dried form (as raisins, currants and sultanas), grapes also hold cultural significance in many parts of 
      the world, particularly for their role in winemaking. Other grape-derived products include various types of 
      jam, juice, vinegar and oil.`,
      price: 120,
      quantity: 10
   },
   {
      images: [],
      productName: "papaya",
      productDescription: `The papaya  or pawpaw  is the plant species Carica papaya, one of the 21 accepted 
      species in the genus Carica of the family Caricaceae.[5] It was first domesticated in Mesoamerica, 
      within modern-day southern Mexico and Central America.[6][7] In 2020, India produced 43% of the world's 
      supply of papayas.`,
      price: 120,
      quantity: 10
   },
   {
      images: [],
      productName: "pomegranate",
      productDescription: `The pomegranate (Punica granatum) is a fruit-bearing deciduous shrub in the family 
      Lythraceae, subfamily Punicoideae, that grows between 5 and 10 m (16 and 33 ft) tall.Young pomegranate in
      Side, Turkey The pomegranate was originally described throughout the Mediterranean region. It was introduced
      into Spanish America in the late 16th century and into California by Spanish settlers in 1769.`,
      quantity: 10,
      price: 120,
   },
   {
      images: [],
      productName: "avocado",
      productDescription: `The avocado (Persea americana) is a medium-sized, evergreen tree in the laurel 
      family (Lauraceae). It is native to the Americas and was first domesticated by Mesoamerican tribes more
      than 5,000 years ago. Then as now it was prized for its large and unusually oily fruit. The tree likely 
      originated in the highlands bridging south-central Mexico and Guatemala. Its fruit, sometimes also
      referred to as an alligator or avocado pear, is botanically a large berry containing a single
       large seed.`,
      price: 120,
      quantity: 10
   },
   {
      images: [],
      productName: "cherry",
      productDescription: `A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe 
      (stone fruit).Commercial cherries are obtained from cultivars of several species, such as the sweet Prunus
      avium and the sour Prunus cerasus. The name 'cherry' also refers to the cherry tree and its wood, and is 
      sometimes applied to almonds and visually similar flowering trees in the genus Prunus, as in "ornamental 
      cherry" or "cherry blossom".`,
      price: 120,
      quantity: 10
   },
   {
      images: [],
      productName: "apricot",
      productDescription: `Apricot first appeared in English in the 16th century as abrecock from the Middle
      French aubercot or later abricot,[2] from Spanish albaricoque and Catalan a(l)bercoc, in turn 
      from Arabic`,
      price: 120,
      quantity: 10
   },
   {
      images: [],
      productName: "jack fruit",
      productDescription: `The jack tree is well-suited to tropical lowlands, and is widely cultivated throughout
      tropical regions of the world. It bears the largest fruit of all trees, reaching as much as 55 kg (120 pounds)
      in weight, 90 cm (35 inches) in length, and 50 cm (20 inches) in diameter. A mature jack tree produces some 200
      fruits per year, with older trees bearing up to 500 fruits in a year. The jackfruit is a multiple fruit composed
        of hundreds to thousands of individual flowers, and the fleshy petals of the unripe fruit are eaten.`,
      price: 120,
      quantity: 10
   },
   {
      images: [],
      productName: "lemon",
      productDescription: `The lemon (Citrus limon) is a species of small evergreen trees in the flowering plant
      family Rutaceae, native to Asia, primarily Northeast India (Assam), Northern Myanmar or China.The tree's 
      ellipsoidal yellow fruit is used for culinary and non-culinary purposes throughout the world, primarily 
      for its juice, which has both culinary and cleaning uses. The pulp and rind are also used in cooking 
      and baking. The juice of the lemon is about 5% to 6% citric acid, with a pH of around 2.2, giving it a 
      sour taste.`,
      price: 10,
      quantity: 10
   },
   {
      images: [],
      productName: "orange",
      productDescription: `An orange is a fruit of various citrus species in the family Rutaceae; it primarily
      refers to Citrus × sinensis, which is also called sweet orange,to distinguish it from the related Citrus 
      aurantium, referred to as bitter orange. The sweet orange reproduces asexually .The orange is a hybrid 
      between pomelo (Citrus maxima) and mandarin (Citrus reticulata).The chloroplast genome, and therefore
      the maternal line, is that of pomelo. The sweet orange has had its full genome sequenced.`,
      price: 100,
      quantity: 10
   },
   {
      images: [],
      productName: "peach",
      productDescription: `The peach (Prunus persica) is a deciduous tree first domesticated and cultivated 
      in Zhejiang province of Eastern China.It bears edible juicy fruits with various characteristics, 
      most called peaches and others (the glossy-skinned, non-fuzzy varieties), nectarines.The specific name
      persica refers to its widespread cultivation in Persia (modern-day Iran), from where it was transplanted
      to Europe. It belongs to the genus Prunus, which includes the cherry, apricot, almond, and plum, in the 
      rose family.`,
      price: 80,
      quantity: 10
   },
   {
      images: [],
      productName: "pear",
      productDescription: `Pears are fruits produced and consumed around the world, growing on a tree and 
      harvested in the Northern Hemisphere in late summer into October. The pear tree and shrub are a species 
      of genus Pyrus, in the family Rosaceae, bearing the pomaceous fruit of the same name. Several 
      species of pears are valued for their edible fruit and juices, while others are cultivated as trees.`,
      price:50,
      quantity: 10
   }
  ]

  constructor(private modalService: BsModalService) {}

  openModal(modalTemplate: TemplateRef<any>,product:any) {
   console.log(product)
   this.product = product;
    this.modalRef = this.modalService.show(modalTemplate,{
        class: 'modal-dialogue-centered modal-md'
      }
    );
  }
}
