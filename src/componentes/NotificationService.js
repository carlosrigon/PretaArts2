import PushNotification from "react-native-push-notification";

class NotificationService {

    //Criar canal de notificações
    criarCanal = () => {
        PushNotification.createChannel( {
            channelId: "notifica",
            channelName: "Notificador do App Preta Arts",
            channelDescription: "Meu canal de notificações do aplicativo Preta Arts"
        },
        (created) => console.log(`createChannel returned '${created}'`)
        )
    }
    
    //Configuração do disparo de notificações
    configurar = () => {
        PushNotification.configure({
            onRegister: function (token) {
                console.log("[NotificationManager] onRegister token:", token)
            },

            onNotification: function (notification) {
                console.log("[NotificationManager] onNotification:", notification)
                //navegador.navigate(notification.title)
                //notification.finish(PushNotificationIOS.FetchResult.NoData);
            }
        })
    }

    //Construir a notificação
    construirNotificAndroid = (id, title, message, data={}, options={}) => {
        return {
            id: id,
            channelId: "notifica",
            autoCancel: true,
            largeIcon: options.largeIcon || "ic_launcher",
            smallIcon: options.smallIcon || "ic_launcher",
            bigText: message || "",
            subText: title || "",
            vibrate: options.vibrate || false,
            vibration: options.vibration || 300,
            priority: options.priority || "high",
            importance: options.importance || "high",
            data: data
        }
    }

    //Mostrar a notificação
    mostrarNotific = (id, title, message, data={}, options={}) => {
        PushNotification.localNotification({
            ...this.construirNotificAndroid(id, title, message, data, options),
            title: title || "",
            message: message || "",
            playSound: options.playSound || false,
            soundName: options.soundName || "default",
            userInteaction: false
        })
    }

        //Agendar Notificações
    agendarNotificacoes = () => {
        PushNotification.localNotificationSchedule({
            channelId: "notifica",
            title: "Bem Vindo! 🎉",
            id: 1,
            message: "Bem vindo(a) ao meu aplicativo. Aqui você encontrará o presente 🎁 ideal para quem você ama.",
            date: new Date(Date.now()),
        }),
        
        PushNotification.localNotificationSchedule({
            channelId: "notifica",
            title: "Vem chegando o Natal! 🎄",
            id: 2,
            message: "Nesse natal, presentei quem você ama com um terço personalizado. Faça sua encomenda! 🎁🎇",
            date: new Date(Date.now() + 1000 * 10),
            //repeatType: "month",
            //repeatTime: 12
        }),

        PushNotification.localNotificationSchedule({
            channelId: "notifica",
            title: "Volta às aulas! 📒 🎒",
            id: 3,
            message: "As aulas estão retornando, que tal presentear com um chaveiro personalizado?! Faça sua encomenda. 🎁",
            date: new Date(Date.now() + 1000 * 30),
            //repeatType: "month",
            //repeatTime: 12
        }),

        PushNotification.localNotificationSchedule({
            channelId: "notifica",
            title: "Pesente de Páscoa 🐇",
            id: 4,
            message: "Nessa Páscoa, presenteie quem você ama 💗 com um terço personalizado. Faça sua encomenda. 🎁",
            date: new Date(Date.now() + 1000 * 60),
            //repeatType: "month",
            //repeatTime: 12
        }),

        PushNotification.localNotificationSchedule({
            channelId: "notifica",
            title: "Dia das Mães 👪",
            id: 5,
            message: "Presenteie sua MÃE 👩 com um lindo terço personalizado. Faça sua encomenda 🎁",
            date: new Date(Date.now() + 1000 * 90),
            //repeatType: "month",
            //repeatTime: 12
        }),

        PushNotification.localNotificationSchedule({
            channelId: "notifica",
            title: "O Amor está no ar 💘💕",
            id: 6,
            message: "O dia dos namorados está chegando. Presenteie seu AMOR 😍 com um lindo terço personalizado. Faça sua encomenda 🎁",
            date: new Date(Date.now() + 1000 * 120),
            //repeatType: "month",
            //repeatTime: 12
        }),

        PushNotification.localNotificationSchedule({
            channelId: "notifica",
            title: "Dia dos Pais 👨‍👧‍👦",
            id: 7,
            message: "Presenteie seu PAI 👨 com um lindo terço personalizado. Faça sua encomenda 🎁",
            date: new Date(Date.now() + 1000 * 150),
            //repeatType: "month",
            //repeatTime: 12
        })
    }

    //Passar o atributo "navigation" do react navigation para as notificações
    setNavigation = (novoNavegador) => {
        navegador = novoNavegador
    }

    //Cancelar todas as notificações
    cancelarTodasNotific = () => {
        PushNotification.cancelAllLocalNotifications();
    }

}

export const Notification = new NotificationService();