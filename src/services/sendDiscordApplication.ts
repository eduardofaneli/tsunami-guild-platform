import type { ApplicationFormData } from '../components/ApplicationForm';

export const buildDiscordPayload = (data: ApplicationFormData, roleId?: string) => {
    const fields = [
        {
            name: "👤 Nome",
            value: data.playerName,
            inline: true,
        },
        {
            name: "🎮 Discord",
            value: data.discordTag,
            inline: true,
        },
        {
            name: "🗣️ Idioma",
            value: data.language,
            inline: true,
        },
        {
            name: "🏆 Classe Principal",
            value: `**${data.primaryClass.className}** (${data.primaryClass.weapon1} | ${data.primaryClass.weapon2})`,
            inline: false,
        },
    ];

    if (data.secondaryClass && data.secondaryClass.className) {
        fields.push({
            name: "⚔️ Classe Secundária",
            value: `**${data.secondaryClass.className}** (${data.secondaryClass.weapon1} | ${data.secondaryClass.weapon2})`,
            inline: false,
        });
    }

    fields.push(
        {
            name: "⏰ Disponibilidade",
            value: data.playtime,
            inline: true,
        },
        {
            name: "🎯 Gear Score",
            value: String(data.gearScore),
            inline: true,
        },
        {
            name: "🏰 Guilds Anteriores",
            value: Array.isArray(data.previousGuilds) && data.previousGuilds.length > 0
                ? data.previousGuilds.map(g =>
                    `• **${g.name}**${g.reason ? ` — _${g.reason}_` : ''}`
                  ).join('\n')
                : "Não informado",
            inline: false,
        },
        {
            name: "📅 Experiência",
            value: data.experience,
            inline: false,
        },
        {
            name: "💬 Motivação",
            value: data.motivation || "Não informado",
            inline: false,
        }
    );

    return {
        content: roleId ? `Olá, <@&${roleId}>! Uma nova candidatura foi criada!` : undefined,
        allowed_mentions: roleId ? { roles: [roleId] } : undefined,
        embeds: [
            {
                title: "📝 Nova Candidatura - TSUNAMI Guild",
                color: 5814783,
                fields,
                footer: {
                    text: "TSUNAMI Guild - Throne and Liberty",
                    icon_url: "https://eduardofaneli.github.io/tsunami-guild-platform/fav-icon.png",
                },
                timestamp: new Date().toISOString(),
            },
        ],
    };
};

export const sendDiscordApplication = async (
    data: ApplicationFormData,
    webhookUrl: string,
    roleId?: string
): Promise<boolean> => {
    const payload = buildDiscordPayload(data, roleId);

    try {
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });
        return response.ok;
    } catch (error) {
        // Você pode adicionar um log ou tratamento de erro aqui
        return false;
    }
};