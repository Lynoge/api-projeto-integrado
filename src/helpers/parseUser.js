module.exports = (entity) => {
  return {
    id: entity.id,
    name: entity.name,
    nickname: entity.nickname,
    email: entity.email,
    phone: entity.phone,
    active: entity.active,
    createAt: entity.createAt,
    updateAt: entity.updateAt,
    type: entity.type,
    image: entity.image,
    rating: entity.rating,
    token: entity.token,
    chatId: entity.chatId,
    online: entity.online,
    latitude: entity.latitude,
    longitude: entity.longitude
  }
}