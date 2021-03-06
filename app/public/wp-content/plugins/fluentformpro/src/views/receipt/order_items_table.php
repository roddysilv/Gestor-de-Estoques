<table style="width: 100%;border: 1px solid #cbcbcb;" class="table ffp_order_items_table ffp_table table_bordered">
    <thead>
    <th><?php _e('Item', 'fluentformpro'); ?></th>
    <th><?php _e('Quantity', 'fluentformpro'); ?></th>
    <th><?php _e('Price', 'fluentformpro'); ?></th>
    <th><?php _e('Line Total', 'fluentformpro'); ?></th>
    </thead>
    <tbody>
    <?php foreach ($items as $order_item): ?>
        <tr>
            <td><?php echo $order_item->item_name; ?></td>
            <td><?php echo $order_item->quantity; ?></td>
            <td><?php echo $order_item->formatted_item_price; ?></td>
            <td><?php echo $order_item->formatted_line_total; ?></td>
        </tr>
    <?php endforeach; ?>
    </tbody>
    <tfoot>
    <tr class="ffp_total_row">
        <th style="text-align: right" colspan="3"><?php _e('Total', 'wppayform'); ?></th>
        <td><?php echo $orderTotal; ?></td>
    </tr>
    </tfoot>
</table>