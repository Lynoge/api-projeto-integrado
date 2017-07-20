module.exports = (entity) => {
  return {
    id: entity.id,
    name: entity.name,
    username: entity.nickname,
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
  }
}