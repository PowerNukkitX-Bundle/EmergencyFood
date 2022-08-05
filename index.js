import { PowerNukkitX, EventPriority } from ":powernukkitx";
import { BlockItemUtil, CreativeInventoryType, ToolType, ToolTier } from ":util";

export function main() {
    console.warn("Hello world");
    BlockItemUtil.registerSimpleItem("emergency_food:primogem_juice", "Primogem Juice",
        CreativeInventoryType.ITEM, "juice", 16, 32, true);
    BlockItemUtil.registerFoodItem("emergency_food:paimeng", "PaiMeng",
        CreativeInventoryType.ITEM, "paimeng", 16, 1, true,
        200, false, true, 6, 8);
    BlockItemUtil.registerToolItem("emergency_food:freedom_sworn", "Freedom Sworn",
        CreativeInventoryType.ITEM, "freedom_sworn", 128, 1, true,
        ToolType.SWORD, ToolTier.DIAMOND, 6, true, true);
}

export function close() {
    console.error("Goodbye world")
}
