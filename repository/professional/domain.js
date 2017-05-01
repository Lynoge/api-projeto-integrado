export default function toDomain (entities) {
  if (!entities) { return null }
  if (Array.isArray(entities)) {
    return entities
      .map(entity => ({
        id: entity.id,
        name: entity.name,
        email: entity.email,
        profission: entity.Profission,
        description: entity.description,
        image: '/public/images/professional/' + entity.id.toString() + '.jpg'
      }))
  } else {
    return {
      id: entities.id,
      name: entities.name,
      email: entities.email,
      profission: entities.Profission,
      description: entities.description,
      image: '/public/images/professional/' + entities.id.toString() + '.jpg'
    }
  }
}
