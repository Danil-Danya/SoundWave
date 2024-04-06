export default syncModel = async (model) => {
    try {
        await User.sync({ force: true });
        console.log('Модель успешно синхронизирована с базой данных');
    }
    catch (error) {
        console.error('Ошибка синхронизации модели:', error);
    }
}