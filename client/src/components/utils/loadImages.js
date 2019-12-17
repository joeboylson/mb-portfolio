import children from '../../images.json'

const loadImages = () => {

  let coaster_images = children.children[0].children.map(image => {
    let newImage = new Image();
    newImage.src = `${process.env.PUBLIC_URL}/images/coaster/${image.name}`;
    return newImage
  })

  let overview_images = children.children[1].children.map(image => {
    let newImage = new Image();
    newImage.src = `${process.env.PUBLIC_URL}/images/overview/${image.name}`;
    return newImage
  })

  return [coaster_images, overview_images]

}

export { loadImages }